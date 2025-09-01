import SajuTable from "./saju/FortuneTable";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-md w-full bg-[#f3f2ef] flex justify-center">
      {/* 웹툰 스타일 세로 레이아웃 */}
      <div className="w-full bg-white flex flex-col">
        {/* 히어로 섹션 */}
        <div className="relative h-[667px] overflow-hidden flex-shrink-0">
          {/* 흐린 배경 */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#5B5247] to-[#937C5F] blur-[10px]"></div>
          {/* 흐릿한 한자 텍스트 배경 */}
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[-15px] opacity-10 text-center text-white text-[60px] font-normal leading-[90px] tracking-[12px] blur-[4px] select-none z-10"
            aria-hidden
          >
            <div className="w-[520px] h-[360px] blur-[1px] flex items-center justify-center">
              <div
                className="text-white text-[60px] font-normal leading-[90px] tracking-[12px] w-full text-justify"
                style={{ textAlignLast: "justify" }}
              >
                甲乙丙丁戊己
                <br />
                庚辛壬癸子丑
                <br />
                寅卯辰巳午未
                <br />
                申酉戌亥甲乙
              </div>
            </div>
          </div>
          <div
            className="absolute left-1/2 -translate-x-1/2 top-[345px] opacity-10 blur-[2px] text-center text-white text-[60px] font-normal leading-[90px] tracking-[12px] select-none z-10"
            aria-hidden
          >
            <div className="w-[520px] h-[360px] flex items-center justify-center">
              <div
                className="text-white text-[60px] font-normal leading-[90px] tracking-[12px] w-full text-justify"
                style={{ textAlignLast: "justify" }}
              >
                甲乙丙丁戊己
                <br />
                庚辛壬癸子丑
                <br />
                寅卯辰巳午未
                <br />
                申酉戌亥甲乙
              </div>
            </div>
          </div>

          {/* 인물 이미지 (단일 레이어) */}
          <div className="absolute left-[34%] top-[140px] w-[80%] h-[530px] overflow-hidden z-100">
            <Image
              src="/assets/image.min.svg"
              alt="character"
              className="w-full h-full "
              fill
              quality={100}
            />
          </div>

          {/* 상단/하단 그라데이션 */}
          <div className="absolute top-[0px] flex h-[195px] items-center justify-center w-full z-10  ">
            <Image
              alt="Rectangle-45"
              src="assets/Rectangle-45.svg"
              className="w-full"
              width="448"
              height="261"
              quality={100}
            />
          </div>
          <div className="absolute bottom-[0px] flex h-[195px] items-center justify-center w-full z-100  ">
            <Image
              alt="gradient-3"
              src="assets/gradient-3.svg"
              className="w-full "
              width="448"
              height="195"
              quality={100}
            />
          </div>

          <div className="absolute left-[-40px] top-[305.65px] w-[345.26px] h-[336.32px] z-0">
            <Image
              alt="gradient-1"
              src="assets/gradient-1.svg"
              className="w-full "
              fill
              quality={100}
            />
          </div>
          <div className="absolute top-[333.5px] w-[418px] h-[313px] z-0 bg-gradient-to-b">
            <Image
              alt="gradient-2"
              src="assets/gradient-2.svg"
              className="w-full "
              fill
              quality={100}
            />
          </div>

          {/* 타이틀 영역 */}
          <div className="absolute left-1/2 -translate-x-1/2 top-[69px] w-[157px] flex flex-col items-center gap-3 z-100">
            <p className="text-white text-[20px] leading-none">제 1장</p>
            <Image
              alt="introduction-line"
              src="/assets/introduction-line.svg"
              className="w-full max-w-[157px] h-5"
              width={157}
              height={20}
              quality={100}
            />
            <p className="text-white text-[20px] leading-none">
              나의 사주 팔자
            </p>
          </div>
        </div>

        {/* 말풍선 섹션 - 히어로와 붓 섹션 사이 */}
        <div className="relative h-[120px] bg-transparent overflow-visible flex-shrink-0 -mt-16 z-100 ">
          <div className="absolute left-6 top-0 w-[70%] sm:w-[60%] md:w-[55%] h-[138.78px]">
            <Image
              src="/assets/speech-bubble.svg"
              alt="speech bubble"
              className="w-full h-full"
              width={257}
              height={181}
              quality={100}
            />
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <p className="text-sm leading-tight text-black text-center flex items-center justify-center h-full mt-2">
                이제 본격적으로
                <br />
                OO님의 사주팔자를
                <br />
                분석해볼 차례네요.
              </p>
            </div>
          </div>
        </div>

        {/* 붓 컷 섹션 */}
        <div className="relative h-[360px] bg-[#f3f2ef] overflow-visible flex-shrink-0 -mt-20">
          {/* 배경 장식 이미지 (좌측 하단) */}
          <div className="absolute left-0 bottom-4 w-[40%] max-w-[153px] h-[120px] opacity-80">
            <Image
              src="/assets/brush-bg.png"
              alt="brush background"
              className="w-full h-full object-cover"
              fill
              quality={100}
            />
          </div>
          {/* 우측 붓 일러스트 */}
          <div className="absolute right-[70px] top-[100px] w-[30%] max-w-[120px] h-[285px]">
            <Image
              src="/assets/brush-illustration.png"
              alt="brush illustration"
              className="w-full h-full object-cover"
              fill
              quality={100}
            />
          </div>
          {/* 효과 텍스트: 붓 이미지와 겹치도록 조정 */}
          <div className="absolute z-100 right-[150px] top-[120px] [text-shadow:rgba(255,255,255,0.3)_0px_4px_10px] text-black text-[50px] leading-none select-none">
            <p>슥슥</p>
          </div>
        </div>

        {/* 하단 일러스트 섹션 */}
        <div className="relative h-[330px] bg-[#f3f2ef] overflow-visible flex-shrink-0">
          {/* 가로 일러스트 배경 */}
          <div className="absolute left-0 top-[34px] w-full h-[306px]">
            <Image
              src="/assets/bottom-illustration.png"
              alt="bottom illustration"
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute  w-[448px] bottom-0 h-[118px] z-0 ">
              <Image
                alt="Rectangle-218"
                src="assets/Rectangle-218.svg"
                className="w-full "
                width={448}
                height={118}
                quality={100}
              />
            </div>
          </div>
          {/* 좌측 말풍선: 위 섹션과 겹치게 위치 조정 */}
          <div className="absolute z-20 left-14 -top-17 w-[60%] max-w-[239px] h-[150px]">
            <Image
              alt="speech-bottom"
              className="block w-full h-full object-cover"
              src="/assets/Group 1410141534.svg"
              fill
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-sm leading-tight text-black text-center flex items-center justify-center h-full -mt-6">
                제가 OO님의 사주를
                <br />
                보기 쉽게 표로 정리했어요
              </p>
            </div>
          </div>
        </div>

        {/* 사주 표 섹션 */}
        <div className="flex justify-center flex-shrink-0 ">
          <SajuTable />
        </div>
      </div>
    </div>
  );
}
