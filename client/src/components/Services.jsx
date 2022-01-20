import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className='flex flex-col lg:flex-row w-full justify-center items-center gradient-bg-services px-4'>
      <div className='flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4'>
        <div className='flex-1 flex flex-col justify-start items-start'>
          <h1 className='text-white text-3xl sm:text-5xl py-2 text-gradient'>
            Services that we
            <br />
            continue to improve
          </h1>
        </div>
      </div>
      <div className='flex-1 flex flex-col justify-start items-center md:m-3'>
        <ServiceCard
          color='bg-[#2952E3]'
          title='Security Guaranteed'
          icon={<BsShieldFillCheck fontSize={21} className='text-white' />}
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Illum mallem levares, quo optimum atque humanissimum virum, Cn. An tu me de L. Summum ením bonum exposuit vacuitatem doloris; Itaque ab his ordiamur. Ergo hoc quidem apparet, nos ad agendum esse natos.'
        />
        <ServiceCard
          color='bg-[#8945f8]'
          title='Best Exchange Rates'
          icon={<BiSearchAlt fontSize={21} className='text-white' />}
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mihi enim satis est, ipsis non satis. Dat enim intervalla et relaxat. Nemo igitur esse beatus potest. Tollitur beneficium, tollitur gratia, quae sunt vincla concordiae. Duo Reges: constructio interrete. Cur deinde Metrodori liberos commendas?'
        />
        <ServiceCard
          color='bg-[#f84550]'
          title='Fastest Transactions'
          icon={<RiHeart2Fill fontSize={21} className='text-white' />}
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quod quidem iam fit etiam in Academia. Aliter enim nosmet ipsos nosse non possumus. Ut optime, secundum naturam affectum esse possit. Neutrum vero, inquit ille.'
        />
      </div>
    </div>
  );
};

export default Services;
