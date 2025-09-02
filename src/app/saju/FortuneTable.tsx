import Image from "next/image";

// 사주 데이터 인터페이스 정의
interface SajuElement {
  korean: string;
  chinese: string;
  element: string;
  color: string;
}

interface ColumnData {
  tenStar: string;
  tenStarKorean: string;
  heavenlyStem: SajuElement;
  earthlyBranch: SajuElement;
  twelveGods: string;
  twelveGodsKorean: string;
  twelveStars: string;
  twelveStarsKorean: string;
  twelveKillers: string;
  twelveKillersKorean: string;
}

interface NoblePerson {
  name: string;
  koreanName: string;
}

interface SajuData {
  name: string;
  birthDate: string;
  birthTime: string;
  columns: {
    hour: ColumnData;
    day: ColumnData;
    month: ColumnData;
    year: ColumnData;
  };
  noblePersons: NoblePerson[];
}

interface SajuTableProps {
  data: SajuData;
}

export default function SajuTable({ data }: SajuTableProps) {
  const { name, birthDate, birthTime, columns, noblePersons } = data;

  return (
    <div className="w-94 h-[621px] bg-[#F5F3EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline-[3px] outline-offset-[-3px] outline-[#2b557e] overflow-hidden relative">
      <div className="flex flex-col items-center justify-center pt-10 pb-4">
        <div className="text-center text-neutral-700 text-base leading-none font-bold">
          {name}님의 사주
        </div>
        <div className="text-center text-neutral-700 text-xl font-bold leading-tight mt-3">
          {birthDate} {birthTime}
        </div>
      </div>

      <div className="absolute w-[110px] h-[48px] -left-[10px] top-[48px] origin-top-left overflow-hidden">
        <Image
          src="/assets/layer_1.svg"
          alt="layer_1"
          width={110}
          height={48}
          className="w-full h-full"
          quality={100}
        />
      </div>

      <div className="absolute w-[110px] h-[48px] left-[300px] top-[18px] origin-top-left overflow-hidden z-100">
        <Image
          src="/assets/layer_2.svg"
          alt="layer_2"
          width={110}
          height={48}
          className="w-full h-full"
          quality={100}
        />
      </div>

      <div className="w-94 h-0 left-0 top-[8px] absolute outline-1 outline-offset-[-0.50px] outline-cyan-800" />
      <div className="w-94 h-0 left-0 top-[613px] absolute outline-1 outline-offset-[-0.50px] outline-pri_navy" />
      <div className="w-90 h-[621px] left-[8px] top-0 absolute border border-pri_navy" />

      <div className="w-66 h-108 left-[88.92px] top-[158.99px] absolute opacity-80 bg-white" />

      <div className="w-8 h-2.5 left-[172.11px] top-[521.82px] absolute text-center justify-start text-black text-[9.78px] font-bold">
        (없음)
      </div>
      <div className="w-8 h-2.5 left-[105.46px] top-[521.82px] absolute text-center justify-start text-black text-[9.78px] font-bold">
        (없음)
      </div>

      <div className="w-8 h-4 left-[37.76px] top-[219.62px] absolute text-center justify-start text-black text-xs font-bold">
        天干
      </div>
      <div className="w-8 h-2 left-[37.71px] top-[237.21px] absolute text-center justify-start text-black text-[7.82px] font-bold">
        (천간)
      </div>
      <div className="w-8 h-4 left-[37.76px] top-[165.83px] absolute text-center justify-start text-black text-xs font-bold">
        十星
      </div>
      <div className="w-8 h-2 left-[37.69px] top-[183.43px] absolute text-center justify-start text-black text-[7.82px] font-bold">
        (십성)
      </div>
      <div className="w-8 h-4 left-[37.76px] top-[342.83px] absolute text-center justify-start text-black text-xs font-bold">
        十星
      </div>
      <div className="w-8 h-2 left-[37.69px] top-[360.43px] absolute text-center justify-start text-black text-[7.82px] font-bold">
        (십성)
      </div>
      <div className="w-8 h-4 left-[37.76px] top-[508.89px] absolute text-center justify-start text-black text-xs font-bold">
        貴人
      </div>
      <div className="w-8 h-2 left-[37.69px] top-[526.48px] absolute text-center justify-start text-black text-[7.82px] font-bold">
        (귀인)
      </div>
      <div className="w-10 h-3.5 left-[34.91px] top-[387.11px] absolute text-center justify-start text-black text-[9.78px] font-bold">
        十二運星
      </div>
      <div className="w-9 h-2 left-[37.36px] top-[402.75px] absolute text-center justify-start text-black text-[7.82px] font-bold">
        (십이운성)
      </div>
      <div className="w-10 h-3.5 left-[34.91px] top-[431.38px] absolute text-center justify-start text-black text-[9.78px] font-bold">
        十二神殺
      </div>
      <div className="w-9 h-2 left-[37.36px] top-[447.02px] absolute text-center justify-start text-black text-[7.82px] font-bold">
        (십이신살)
      </div>
      <div className="w-8 h-4 left-[37.76px] top-[285.14px] absolute text-center justify-start text-black text-xs font-bold">
        地支
      </div>
      <div className="w-8 h-2 left-[37.69px] top-[304.33px] absolute text-center justify-start text-black text-[7.82px] font-bold">
        (지지)
      </div>

      <div className="w-[330px] h-0 left-[21px] top-[267.53px] absolute outline-[0.52px] outline-offset-[-0.26px] outline-neutral-400"></div>
      <div className="w-[330px] h-0 left-[21px] top-[201.04px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[158.99px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[334.03px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[378.31px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[422.59px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[466.86px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[587.83px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>

      <div className="w-[473.83px] h-0 left-[88.92px] top-[114px] absolute origin-top-left rotate-90 outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[473.83px] h-0 left-[154.44px] top-[114px] absolute origin-top-left rotate-90 outline-[0.49px] outline-offset-[-0.24px] outline-zinc-500"></div>
      <div className="w-[473.83px] h-0 left-[219.96px] top-[114px] absolute origin-top-left rotate-90 outline-[0.49px] outline-offset-[-0.24px] outline-zinc-500"></div>
      <div className="w-[473.83px] h-0 left-[285.48px] top-[114px] absolute origin-top-left rotate-90 outline-[0.49px] outline-offset-[-0.24px] outline-zinc-500"></div>
      <div className="w-[473.83px] h-0 left-[351.00px] top-[114px] absolute origin-top-left rotate-90 outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[473.83px] h-0 left-[416.52px] top-[114px] absolute origin-top-left rotate-90 outline-1 outline-offset-[-0.52px] outline-black"></div>

      <div className="w-5 h-6 left-[111.41px] top-[118.89px] absolute justify-start text-black text-xl font-bold">
        時
      </div>
      <div className="w-5 h-6 left-[176.93px] top-[118.89px] absolute justify-start text-black text-xl font-bold">
        日
      </div>
      <div className="w-5 h-6 left-[242.45px] top-[118.89px] absolute justify-start text-black text-xl font-bold">
        月
      </div>
      <div className="w-5 h-6 left-[307.97px] top-[118.89px] absolute justify-start text-black text-xl font-bold">
        年
      </div>

      <div className="w-7 h-8 left-[107.50px] top-[163.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.hour.tenStar}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.hour.tenStarKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[107.50px] top-[340.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.hour.twelveGods}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.hour.twelveGodsKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[107.50px] top-[383.96px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.hour.twelveStars}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.hour.twelveStarsKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[107.50px] top-[428.11px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.hour.twelveKillers}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.hour.twelveKillersKorean})
        </div>
      </div>

      <div className="w-7 h-8 left-[173.02px] top-[163.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.day.tenStar}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.day.tenStarKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[173.02px] top-[340.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.day.twelveGods}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.day.twelveGodsKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[173.18px] top-[383.96px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.day.twelveStars}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.day.twelveStarsKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[173.18px] top-[428.11px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.day.twelveKillers}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.day.twelveKillersKorean})
        </div>
      </div>

      <div className="w-7 h-8 left-[238.54px] top-[163.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.month.tenStar}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.month.tenStarKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[238.54px] top-[340.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.month.twelveGods}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.month.twelveGodsKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[238.70px] top-[383.96px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.month.twelveStars}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.month.twelveStarsKorean})
        </div>
      </div>
      <div className="w-10 h-8 left-[235.70px] top-[428.11px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.month.twelveKillers}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.month.twelveKillersKorean})
        </div>
      </div>

      <div className="w-7 h-8 left-[304.06px] top-[163.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.year.tenStar}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.year.tenStarKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[304.06px] top-[340.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.year.twelveGods}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.year.twelveGodsKorean})
        </div>
      </div>
      <div className="w-7 h-8 left-[304.22px] top-[383.96px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.year.twelveStars}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.year.twelveStarsKorean})
        </div>
      </div>
      <div className="w-10 h-8 left-[300.22px] top-[428.11px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {columns.year.twelveKillers}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({columns.year.twelveKillersKorean})
        </div>
      </div>

      <div className="w-12 h-8 left-[230.68px] top-[508.12px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {noblePersons[0]?.name}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({noblePersons[0]?.koreanName})
        </div>
      </div>
      <div className="w-12 h-8 left-[297.22px] top-[471.80px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {noblePersons[1]?.name}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({noblePersons[1]?.koreanName})
        </div>
      </div>
      <div className="w-12 h-8 left-[297.22px] top-[510.12px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {noblePersons[2]?.name}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({noblePersons[2]?.koreanName})
        </div>
      </div>
      <div className="w-12 h-8 left-[297.22px] top-[546.83px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">
          {noblePersons[3]?.name}
        </div>
        <div className="text-center text-black text-[9.78px] font-bold">
          ({noblePersons[3]?.koreanName})
        </div>
      </div>

      <div className="w-14 h-14 left-[94.79px] top-[206.90px] absolute">
        <div
          className={`w-14 h-14 left-0 top-0 absolute ${columns.hour.heavenlyStem.color} rounded-xl`}
        />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">
            {columns.hour.heavenlyStem.korean}
          </div>
          <div className="text-white text-2xl font-bold -my-1">
            {columns.hour.heavenlyStem.chinese}
          </div>
          <div className="text-white text-[8.37px] font-normal">
            {columns.hour.heavenlyStem.element}
          </div>
        </div>
      </div>

      <div className="w-14 h-14 left-[94.79px] top-[272.42px] absolute">
        <div
          className={`w-14 h-14 left-0 top-0 absolute ${columns.hour.earthlyBranch.color} rounded-xl`}
        />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">
            {columns.hour.earthlyBranch.korean}
          </div>
          <div className="text-white text-2xl font-bold -my-1">
            {columns.hour.earthlyBranch.chinese}
          </div>
          <div className="text-white text-[8.37px] font-normal">
            {columns.hour.earthlyBranch.element}
          </div>
        </div>
      </div>

      <div className="w-14 h-14 left-[160.30px] top-[206.90px] absolute">
        <div
          className={`w-14 h-14 left-0 top-0 absolute ${columns.day.heavenlyStem.color} rounded-xl`}
        />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">
            {columns.day.heavenlyStem.korean}
          </div>
          <div className="text-white text-2xl font-bold -my-1">
            {columns.day.heavenlyStem.chinese}
          </div>
          <div className="text-white text-[8.37px] font-normal">
            {columns.day.heavenlyStem.element}
          </div>
        </div>
      </div>

      <div className="w-14 h-14 left-[160.30px] top-[272.42px] absolute">
        <div
          className={`w-14 h-14 left-0 top-0 absolute ${columns.day.earthlyBranch.color} rounded-xl`}
        />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">
            {columns.day.earthlyBranch.korean}
          </div>
          <div className="text-white text-2xl font-bold -my-1">
            {columns.day.earthlyBranch.chinese}
          </div>
          <div className="text-white text-[8.37px] font-normal">
            {columns.day.earthlyBranch.element}
          </div>
        </div>
      </div>

      <div className="w-14 h-14 left-[225.82px] top-[206.90px] absolute">
        <div
          className={`w-14 h-14 left-0 top-0 absolute ${columns.month.heavenlyStem.color} rounded-xl`}
        />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">
            {columns.month.heavenlyStem.korean}
          </div>
          <div className="text-white text-2xl font-bold -my-1">
            {columns.month.heavenlyStem.chinese}
          </div>
          <div className="text-white text-[8.37px] font-normal">
            {columns.month.heavenlyStem.element}
          </div>
        </div>
      </div>

      <div className="w-14 h-14 left-[225.82px] top-[272.42px] absolute">
        <div
          className={`w-14 h-14 left-0 top-0 absolute ${columns.month.earthlyBranch.color} rounded-xl`}
        />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">
            {columns.month.earthlyBranch.korean}
          </div>
          <div className="text-white text-2xl font-bold -my-1">
            {columns.month.earthlyBranch.chinese}
          </div>
          <div className="text-white text-[8.37px] font-normal">
            {columns.month.earthlyBranch.element}
          </div>
        </div>
      </div>

      <div className="w-14 h-14 left-[291.34px] top-[206.90px] absolute">
        <div
          className={`w-14 h-14 left-0 top-0 absolute ${columns.year.heavenlyStem.color} rounded-xl`}
        />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">
            {columns.year.heavenlyStem.korean}
          </div>
          <div className="text-white text-2xl font-bold -my-1">
            {columns.year.heavenlyStem.chinese}
          </div>
          <div className="text-white text-[8.37px] font-normal">
            {columns.year.heavenlyStem.element}
          </div>
        </div>
      </div>

      <div className="w-14 h-14 left-[291.34px] top-[272.42px] absolute">
        <div
          className={`w-14 h-14 left-0 top-0 absolute ${columns.year.earthlyBranch.color} rounded-xl`}
        />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div
            className={`text-[7.60px] font-normal ${
              columns.year.earthlyBranch.color.includes("stone-50")
                ? "text-black"
                : "text-white"
            }`}
          >
            {columns.year.earthlyBranch.korean}
          </div>
          <div
            className={`text-2xl font-bold -my-1 ${
              columns.year.earthlyBranch.color.includes("stone-50")
                ? "text-black"
                : "text-white"
            }`}
          >
            {columns.year.earthlyBranch.chinese}
          </div>
          <div
            className={`text-[8.37px] font-normal ${
              columns.year.earthlyBranch.color.includes("stone-50")
                ? "text-black"
                : "text-white"
            }`}
          >
            {columns.year.earthlyBranch.element}
          </div>
        </div>
      </div>
    </div>
  );
}
