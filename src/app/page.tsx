import SajuTable from "./saju/FortuneTable";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-md w-full bg-[#f3f2ef] flex justify-center">
      <div className="w-full bg-white flex flex-col">
        <div className="relative h-[667px] overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#5B5247] to-[#937C5F] blur-[10px]"></div>
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

          <div className="absolute left-[34%] top-[140px] w-[80%] h-[530px] overflow-hidden z-100">
            <Image
              src="/assets/image.min.svg"
              alt="character"
              className="w-full h-full "
              fill
              quality={100}
            />
          </div>

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
          <div className="absolute -bottom-[250px] flex h-full items-center justify-center w-full z-100  ">
            <Image
              alt="gradient-3"
              src="assets/gradient-3.svg"
              className="w-full h-full"
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

        <div className="relative h-[120px] bg-transparent -mt-16 z-100 ">
          <div className="absolute left-6 top-0 w-[70%] h-[138.78px] max-w-[239px] z-20">
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

        <div className="relative h-[360px] bg-[#f3f2ef] overflow-visible flex-shrink-0 -mt-20">
          <div className="absolute left-0 bottom-4 w-[40%] max-w-[153px] h-[120px] opacity-80">
            <Image
              src="/assets/brush-bg.png"
              alt="brush background"
              className="w-full h-full object-cover"
              fill
              quality={100}
            />
          </div>
          <div className="absolute right-[70px] top-[100px] w-[30%] max-w-[120px] h-[285px]">
            <Image
              src="/assets/brush-illustration.png"
              alt="brush illustration"
              className="w-full h-full object-cover"
              fill
              quality={100}
            />
          </div>
          <div className="absolute z-100 right-[150px] top-[120px] [text-shadow:rgba(255,255,255,0.3)_0px_4px_10px] text-black text-[50px] leading-none select-none">
            <p>슥슥</p>
          </div>
        </div>

        <div className="relative h-[330px] bg-[#f3f2ef] overflow-visible flex-shrink-0">
          <div className="absolute left-0 top-[34px] w-full h-[306px]">
            <Image
              src="/assets/bottom-illustration.png"
              alt="bottom illustration"
              className="w-full h-full object-cover"
              fill
            />
            <div className="absolute  max-w-[448px] -bottom-[100px] h-full z-0 ">
              <Image
                alt="Rectangle-218"
                src="assets/Rectangle-218.svg"
                className="w-full h-full bottom-0"
                width={448}
                height={118}
                quality={100}
              />
            </div>
          </div>
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

        <div className="flex justify-center flex-shrink-0 ">
          <SajuTable
            data={{
              name: "김로켓",
              birthDate: "1980년 8월27일",
              birthTime: "08:10",
              columns: {
                hour: {
                  tenStar: "傷官",
                  tenStarKorean: "상관",
                  heavenlyStem: {
                    korean: "임",
                    chinese: "壬",
                    element: "陽水",
                    color: "bg-zinc-800",
                  },
                  earthlyBranch: {
                    korean: "인",
                    chinese: "寅",
                    element: "陽木",
                    color: "bg-teal-600",
                  },
                  twelveGods: "比肩",
                  twelveGodsKorean: "비견",
                  twelveStars: "死",
                  twelveStarsKorean: "사",
                  twelveKillers: "劫殺",
                  twelveKillersKorean: "겁살",
                },
                day: {
                  tenStar: "比肩",
                  tenStarKorean: "비견",
                  heavenlyStem: {
                    korean: "정",
                    chinese: "丁",
                    element: "陰火",
                    color: "bg-red-600",
                  },
                  earthlyBranch: {
                    korean: "사",
                    chinese: "巳",
                    element: "陰火",
                    color: "bg-red-600",
                  },
                  twelveGods: "劫財",
                  twelveGodsKorean: "겁재",
                  twelveStars: "帝旺",
                  twelveStarsKorean: "제왕",
                  twelveKillers: "地殺",
                  twelveKillersKorean: "지살",
                },
                month: {
                  tenStar: "傷官",
                  tenStarKorean: "상관",
                  heavenlyStem: {
                    korean: "계",
                    chinese: "癸",
                    element: "陰水",
                    color: "bg-zinc-800",
                  },
                  earthlyBranch: {
                    korean: "해",
                    chinese: "亥",
                    element: "陰水",
                    color: "bg-zinc-800",
                  },
                  twelveGods: "食神",
                  twelveGodsKorean: "식신",
                  twelveStars: "胎",
                  twelveStarsKorean: "태",
                  twelveKillers: "驛馬殺",
                  twelveKillersKorean: "역마살",
                },
                year: {
                  tenStar: "傷官",
                  tenStarKorean: "상관",
                  heavenlyStem: {
                    korean: "계",
                    chinese: "癸",
                    element: "陰水",
                    color: "bg-zinc-800",
                  },
                  earthlyBranch: {
                    korean: "유",
                    chinese: "酉",
                    element: "陰金",
                    color: "bg-stone-50 border-1 border-black",
                  },
                  twelveGods: "偏財",
                  twelveGodsKorean: "편재",
                  twelveStars: "長生",
                  twelveStarsKorean: "장생",
                  twelveKillers: "將星殺",
                  twelveKillersKorean: "장성살",
                },
              },
              noblePersons: [
                { name: "天乙", koreanName: "천을귀인" },
                { name: "天乙", koreanName: "천을귀인" },
                { name: "太極", koreanName: "태극귀인" },
                { name: "文昌", koreanName: "문창귀인" },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}
