import Image from "next/image";

export default function SajuTable() {
  return (
    <div className="w-94 h-[621px] bg-[#F5F3EC] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] outline-[3px] outline-offset-[-3px] outline-[#2b557e] overflow-hidden relative">
      {/* 제목 섹션 */}
      <div className="flex flex-col items-center justify-center pt-10 pb-4">
        <div className="text-center text-neutral-700 text-base leading-none font-bold">
          김로켓님의 사주
        </div>
        <div className="text-center text-neutral-700 text-xl font-bold leading-tight mt-3">
          1980년 8월27일 08:10
        </div>
      </div>

      {/* 장식 요소들 */}
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

      {/* 테두리 선들 */}
      <div className="w-94 h-0 left-0 top-[8px] absolute outline-1 outline-offset-[-0.50px] outline-cyan-800" />
      <div className="w-94 h-0 left-0 top-[613px] absolute outline-1 outline-offset-[-0.50px] outline-pri_navy" />
      <div className="w-90 h-[621px] left-[8px] top-0 absolute border border-pri_navy" />

      {/* 메인 표 배경 */}
      <div className="w-66 h-108 left-[88.92px] top-[158.99px] absolute opacity-80 bg-white" />

      {/* 하단 텍스트 */}
      <div className="w-8 h-2.5 left-[172.11px] top-[521.82px] absolute text-center justify-start text-black text-[9.78px] font-bold">
        (없음)
      </div>
      <div className="w-8 h-2.5 left-[105.46px] top-[521.82px] absolute text-center justify-start text-black text-[9.78px] font-bold">
        (없음)
      </div>

      {/* 왼쪽 라벨들 */}
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

      {/* 가로 선들 */}
      <div className="w-[330px] h-0 left-[21px] top-[267.53px] absolute outline-[0.52px] outline-offset-[-0.26px] outline-neutral-400"></div>
      <div className="w-[330px] h-0 left-[21px] top-[201.04px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[158.99px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[334.03px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[378.31px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[422.59px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[466.86px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[330px] h-0 left-[21px] top-[587.83px] absolute outline-1 outline-offset-[-0.52px] outline-black"></div>

      {/* 세로 선들 */}
      <div className="w-[473.83px] h-0 left-[88.92px] top-[114px] absolute origin-top-left rotate-90 outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[473.83px] h-0 left-[154.44px] top-[114px] absolute origin-top-left rotate-90 outline-[0.49px] outline-offset-[-0.24px] outline-zinc-500"></div>
      <div className="w-[473.83px] h-0 left-[219.96px] top-[114px] absolute origin-top-left rotate-90 outline-[0.49px] outline-offset-[-0.24px] outline-zinc-500"></div>
      <div className="w-[473.83px] h-0 left-[285.48px] top-[114px] absolute origin-top-left rotate-90 outline-[0.49px] outline-offset-[-0.24px] outline-zinc-500"></div>
      <div className="w-[473.83px] h-0 left-[351.00px] top-[114px] absolute origin-top-left rotate-90 outline-1 outline-offset-[-0.52px] outline-black"></div>
      <div className="w-[473.83px] h-0 left-[416.52px] top-[114px] absolute origin-top-left rotate-90 outline-1 outline-offset-[-0.52px] outline-black"></div>

      {/* 컬럼 헤더 */}
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

      {/* 시 컬럼 데이터 */}
      <div className="w-7 h-8 left-[107.50px] top-[163.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">傷官</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (상관)
        </div>
      </div>
      <div className="w-7 h-8 left-[107.50px] top-[340.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">比肩</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (비견)
        </div>
      </div>
      <div className="w-7 h-8 left-[107.50px] top-[383.96px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">死</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (사)
        </div>
      </div>
      <div className="w-7 h-8 left-[107.50px] top-[428.11px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">劫殺</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (겁살)
        </div>
      </div>

      {/* 일 컬럼 데이터 */}
      <div className="w-7 h-8 left-[173.02px] top-[163.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">比肩</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (비견)
        </div>
      </div>
      <div className="w-7 h-8 left-[173.02px] top-[340.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">劫財</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (겁재)
        </div>
      </div>
      <div className="w-7 h-8 left-[173.18px] top-[383.96px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">帝旺</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (제왕)
        </div>
      </div>
      <div className="w-7 h-8 left-[173.18px] top-[428.11px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">地殺</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (지살)
        </div>
      </div>

      {/* 월 컬럼 데이터 */}
      <div className="w-7 h-8 left-[238.54px] top-[163.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">傷官</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (상관)
        </div>
      </div>
      <div className="w-7 h-8 left-[238.54px] top-[340.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">食神</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (식신)
        </div>
      </div>
      <div className="w-7 h-8 left-[238.70px] top-[383.96px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">胎</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (태)
        </div>
      </div>
      <div className="w-10 h-8 left-[235.70px] top-[428.11px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">驛馬殺</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (역마살)
        </div>
      </div>

      {/* 년 컬럼 데이터 */}
      <div className="w-7 h-8 left-[304.06px] top-[163.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">傷官</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (상관)
        </div>
      </div>
      <div className="w-7 h-8 left-[304.06px] top-[340.94px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">偏財</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (편재)
        </div>
      </div>
      <div className="w-7 h-8 left-[304.22px] top-[383.96px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">長生</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (장생)
        </div>
      </div>
      <div className="w-10 h-8 left-[300.22px] top-[428.11px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">將星殺</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (장성살)
        </div>
      </div>

      {/* 귀인 데이터 */}
      <div className="w-12 h-8 left-[230.68px] top-[508.12px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">天乙</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (천을귀인)
        </div>
      </div>
      <div className="w-12 h-8 left-[297.22px] top-[471.80px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">天乙</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (천을귀인)
        </div>
      </div>
      <div className="w-12 h-8 left-[297.22px] top-[510.12px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">太極</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (태극귀인)
        </div>
      </div>
      <div className="w-12 h-8 left-[297.22px] top-[546.83px] absolute flex flex-col items-center justify-center">
        <div className="text-center text-black text-sm font-bold">文昌</div>
        <div className="text-center text-black text-[9.78px] font-bold">
          (문창귀인)
        </div>
      </div>

      {/* 천간 지지 박스들 */}
      {/* 시 천간 */}
      <div className="w-14 h-14 left-[94.79px] top-[206.90px] absolute">
        <div className="w-14 h-14 left-0 top-0 absolute bg-zinc-800 rounded-xl" />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">임</div>
          <div className="text-white text-2xl font-bold -my-1">壬</div>
          <div className="text-white text-[8.37px] font-normal">陽水</div>
        </div>
      </div>

      {/* 시 지지 */}
      <div className="w-14 h-14 left-[94.79px] top-[272.42px] absolute">
        <div className="w-14 h-14 left-0 top-0 absolute bg-teal-600 rounded-xl" />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">인</div>
          <div className="text-white text-2xl font-bold -my-1">寅</div>
          <div className="text-white text-[8.37px] font-normal">陽木</div>
        </div>
      </div>

      {/* 일 천간 */}
      <div className="w-14 h-14 left-[160.30px] top-[206.90px] absolute">
        <div className="w-14 h-14 left-0 top-0 absolute bg-red-600 rounded-xl" />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">정</div>
          <div className="text-white text-2xl font-bold -my-1">丁</div>
          <div className="text-white text-[8.37px] font-normal">陰火</div>
        </div>
      </div>

      {/* 일 지지 */}
      <div className="w-14 h-14 left-[160.30px] top-[272.42px] absolute">
        <div className="w-14 h-14 left-0 top-0 absolute bg-red-600 rounded-xl" />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">사</div>
          <div className="text-white text-2xl font-bold -my-1">巳</div>
          <div className="text-white text-[8.37px] font-normal">陰火</div>
        </div>
      </div>

      {/* 월 천간 */}
      <div className="w-14 h-14 left-[225.82px] top-[206.90px] absolute">
        <div className="w-14 h-14 left-0 top-0 absolute bg-zinc-800 rounded-xl" />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">계</div>
          <div className="text-white text-2xl font-bold -my-1">癸</div>
          <div className="text-white text-[8.37px] font-normal">陰水</div>
        </div>
      </div>

      {/* 월 지지 */}
      <div className="w-14 h-14 left-[225.82px] top-[272.42px] absolute">
        <div className="w-14 h-14 left-0 top-0 absolute bg-zinc-800 rounded-xl" />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-white text-[7.60px] font-normal">해</div>
          <div className="text-white text-2xl font-bold -my-1">亥</div>
          <div className="text-white text-[8.37px] font-normal">陰水</div>
        </div>
      </div>

      {/* 년 천간 */}
      <div className="w-14 h-14 left-[291.34px] top-[206.90px] absolute">
        <div className="w-14 h-14 left-0 top-0 absolute bg-zinc-800 rounded-xl" />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-stone-50 text-[7.60px] font-normal">계</div>
          <div className="text-stone-50 text-2xl font-bold -my-1">癸</div>
          <div className="text-stone-50 text-[8.37px] font-normal">陰水</div>
        </div>
      </div>

      {/* 년 지지 */}
      <div className="w-14 h-14 left-[291.34px] top-[272.42px] absolute">
        <div className="w-14 h-14 left-0 top-0 absolute bg-stone-50 rounded-xl border-1 border-black" />
        <div className="w-14 h-14 left-0 top-0 absolute flex flex-col items-center justify-center">
          <div className="text-black text-[7.60px] font-normal">유</div>
          <div className="text-black text-2xl font-bold -my-1">酉</div>
          <div className="text-black text-[8.37px] font-normal">陰金</div>
        </div>
      </div>
    </div>
  );
}
