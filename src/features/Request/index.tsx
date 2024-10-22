import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button, Input } from "@/components/ui";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

export default function Request() {
  return (
    <section className="w-full medium:h-screen flex justify-center items-center flex-col medium:my-80 my-24 lg:my-16 xl:my-80">
      <div className="text-center">
        <h3 className="bg-gradient-to-r from-[#FF4E83] to-[#FFBB54] bg-clip-text text-transparent text-lg medium:text-2xl w-max medium:mb-4">
          영상 제작 문의
        </h3>
      </div>
      <h1 className="text-2xl medium:text-[44px] font-extralight font-sans text-center mt-4 medium:mt-0">
        <span className="font-bold">영상 제작이 필요하다면, </span>
        <br className="block medium:hidden" />
        지금 문의 주세요.
      </h1>
      <p className="px-[70px] medium:px-0 text-base medium:text-2xl font-normal medium:font-bold text-center mt-8 text-foreground/60">
        여러분이 필요한 영상을 빠르게 제작하기 위해 플루닛 영상제작소가
        <br className="hidden medium:block" />
        즉시 연락 드리겠습니다.
      </p>
      <p className="text-base text-center mt-8 text-[#666666] medium:hidden font-bold">
        EMAIL
      </p>
      <p className="text-base medium:text-lg text-center mt-0 medium:mt-8 text-white medium:text-[#666666]">
        henry.lim@saltlux.com
      </p>

      <div className="flex justify-center items-center flex-col mt-2 medium:mt-16 w-full medium:w-[50vw] px-4 medium:px-0">
        <div className="mt-8 w-full">
          <Select>
            <SelectTrigger className="w-full text-base medium:text-xl font-bold text-foreground/60 p-8 bg-[#141414] rounded-[15px] border-white/[.15]">
              <SelectValue placeholder="영상 유형 선택" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>영상 유형 선택</SelectLabel>
                <SelectItem value="promotional">홍보영상</SelectItem>
                <SelectItem value="educational">교육영상</SelectItem>
                <SelectItem value="product">제품소개</SelectItem>
                <SelectItem value="social">소셜미디어</SelectItem>
                <SelectItem value="other">기타</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="mt-8 w-full">
          <Input
            type="text"
            placeholder="연락 받으실 담당자 성함"
            className="w-full text-base medium:text-xl font-bold text-foreground/60 p-8 bg-[#141414] rounded-[15px] border-white/[.15]"
          />
        </div>
        <div className="mt-8 w-full">
          <Input
            type="email"
            placeholder="이메일"
            className="w-full text-base medium:text-xl font-bold text-foreground/60 p-8 bg-[#141414] rounded-[15px] border-white/[.15]"
          />
        </div>
        <div className="mt-8 w-full">
          <Input
            type="text"
            placeholder="휴대폰 번호"
            className="w-full text-base medium:text-xl font-bold text-foreground/60 p-8 bg-[#141414] rounded-[15px] border-white/[.15]"
          />
        </div>
        <div className="mt-8 w-full">
          <Textarea
            placeholder={`의뢰하실 영상내용
아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요.

고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등
영상 장르 : 홍보,프로모션/IR/프레젠테이션 등
내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.`}
            className="w-full text-base medium:text-xl font-bold text-foreground/60 p-8 bg-[#141414] rounded-[15px] border-white/[.15] placeholder:whitespace-pre-wrap min-h-[280px]"
          />
        </div>
        <div className="mt-8 w-full">
          <Input
            type="text"
            placeholder="참고 영상"
            className="w-full text-base medium:text-xl font-bold text-foreground/60 p-8 bg-[#141414] rounded-[15px] border-white/[.15]"
          />
          <p className="mt-16 medium:mt-4 text-xs medium:text-base text-[#FF6D51] medium:pl-6 flex gap-2 pl-2">
            <span className="text-2xl font-bold">*</span>
            <span>
              {" "}
              참고할만한 영상이나 원하시는 영상과 유사한 영상의 링크 주소를
              적어주시면 더 정확히 안내해드리겠습니다.
            </span>
          </p>
        </div>
        <div className="mt-24 w-full flex justify-between medium:items-center flex-col medium:flex-row gap-16 medium:gap-0">
          <div className="flex gap-2 medium:gap-4">
            <Checkbox id="privacy-policy" />
            <label
              htmlFor="privacy-policy"
              className="text-sm medium:text-xl font-normal leading-none  text-foreground/60 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              <span
                className="border-b border-current pb-[0.1em] inline-block"
                style={{ textUnderlineOffset: "0.2em" }}
              >
                개인정보처리방침
              </span>
              에 동의합니다.
            </label>
          </div>

          <Button className="px-8 py-8 bg-[#FF6D51] text-white rounded-[8px] text-xl font-bold hover:text-black">
            문의 보내기
          </Button>
        </div>
      </div>
    </section>
  );
}
