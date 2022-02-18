import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode } from '@nestjs/common';
import { MemberService } from './member.service';
import { RegisterMemberDto } from './dto/register-member.dto'
import { Member } from './entities/member.entity';

@Controller('member')
export class MemberController {
  constructor(private readonly memberService: MemberService) {
    this.memberService = memberService;
  }

  //회원가입 여부 확인을 위한 학번으로 조회
  @Get(':stdcode')
  findOne(@Param('stdcode') stdcode: number): Promise<Member> {
    return this.memberService.findOne(stdcode);
  }
  
  //회원 가입
  @Post()
  async registerMember(@Body() RegisterMemberDto: RegisterMemberDto){
    return await this.memberService.registerMember(RegisterMemberDto);
  }

}
