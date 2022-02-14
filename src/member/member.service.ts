import { ForbiddenException, HttpStatus, Injectable,  } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Member } from './entities/member.entity';
import { RegisterMemberDto } from './dto/register-member.dto';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MemberService {
  constructor(
    @InjectRepository(Member)
    private readonly memberRepository: Repository<Member>
  ) {
    this.memberRepository = memberRepository
  }
  //회원가입
  async registerMember(registerMemberdto: RegisterMemberDto): Promise<any> {
    
    //회원가입 여부 확인
    const isExist = await this.memberRepository.findOne({stdCode: registerMemberdto.stdCode});
    if(isExist) {
      throw new ForbiddenException({
        statusCode: HttpStatus.FORBIDDEN,
        message: [`이미 가입된 학번입니다.`],
        error: 'Forbidden'
      })
    }
    const salt = await bcrypt.genSalt(10);
    registerMemberdto.userPw = await bcrypt.hash(registerMemberdto.userPw, salt);

    const { stdCode, userId, userPw, mail, phone } = registerMemberdto;

    const newmember = new Member();
    newmember.stdCode = stdCode;
    newmember.userId = userId;
    newmember.userPw = userPw;
    newmember.mail = mail;
    newmember.phone = phone;  
      
    await this.memberRepository.save(newmember);

    console.log("Error : " + HttpStatus.FORBIDDEN);
    return newmember;
  }

  //회원가입 여부 확인을 위한 학번으로 조회
  findOne(stdCode: number): Promise<Member> {
    return this.memberRepository.findOne({stdCode: stdCode}, {
      select: ["stdCode", "userId", "userPw", "mail", "phone"],
    });
  }
}