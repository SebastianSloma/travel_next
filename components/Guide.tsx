import React from 'react';
import Image from 'next/image';

const Guide = () => {
	return (
		<section className='flexCenter flex-col'>
			<div className='border-2 border-red-500 padding-container max-container w-full pb-24'>
				<Image src='/camp.svg' alt='camp' width={50} height={50} />
				<p className='regular-18 -mt-1 mb-3 text-green-50'>
					We Are Here For You
				</p>
				<div className='flex flex-wrap justify-between gap-5 lg:gap-10'>
					<h2 className='bold-40 lg:bold-64 xl:max-w-[390px]'>
						Guide You to Easy Path
					</h2>
					<p className='regular-16 text-gray-30 xl:max-w-[520px]'>
						When you look out the window and see gray skies, and temperatures
						have been near zero for weeks on end then you know that the time has
						come to plan your next vacation. Many people use travel portals
						before booking their trip, or inform themselves about possible
						travel destinations in travel blogs. An important part of the pages
						are descriptions of destinations and travel texts. They provide the
						reader with background information, practical tips and get him in
						the mood for a holiday as well as offering good decision guidance.{' '}
					</p>
				</div>
			</div>

			<div className='flexCenter max-container relative w-full border-2 border-blue-500'>
				<Image
					src='/boat.png'
					alt='boat'
					width={1440}
					height={580}
					className='w-full object-cover object-center 2xl:rounded-5xl'
				/>
				<div className='absolute flex bg-white py-8 pl-5 pr-7 gap-3 rounded-3xl border shadow-md md:left-[5%] lg:top-20'>
					<Image src='/meter.svg' alt='meter' width={16} height={158} className='h-full w-auto'/>
					<div className='flexBetween flex-col'>
						<div className='flex w-full flex-col'>
							<div className='flexBetween w-full'>
								<p className='regular-16 text-gray-20'>Destination</p>
								<p className='bold-16 text-green-50'>43 min</p>
							</div>
							<p className='bold-20 mt-2'>Aquas Clientes</p>
						</div>
						<div className='flex w-full flex-col'>
							<p className='regular-16 text-gray-20'>Start Track</p>
							<p className='bold-20 mt-2 whitespace-nowrap'>Wonorejo Puket</p>
						</div>
					I</div>
				</div>
			</div>
		</section>
	);
};

export default Guide;
