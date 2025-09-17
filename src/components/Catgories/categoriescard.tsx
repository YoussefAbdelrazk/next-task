import { cn } from '@/lib/utils';

export default function CategoriesCard({
  title,
  className,
  textcolor,
  description,
}: {
  title: string;
  className?: string;
  textcolor?: string;
  description?: string;
}) {
  return (
    <div
      className={cn(
        'bg-white group relative rounded-lg p-6 border w-[300px] h-[200px] border-[#D9D9D9] flex items-center justify-center duration-300 cursor-pointer',
        className,
      )}
    >
      <div className=' hidden group-hover:block absolute top-0 left-5 w-[27px] h-[70px] bg-[#FDE6D5]'></div>
      {title === 'General' && (
        <div className='absolute top-0 left-5 w-[27px] h-[70px] bg-[#FDE6D5]'></div>
      )}
      <div className='flex flex-col items-start justify-center z-10 cursor-pointerrounded-lg p-2 duration-300'>
        <h3 className={cn('text-3xl  font-bold', textcolor, description && 'text-2xl')}>{title}</h3>
        {


          <p className={cn('text-sm text-gray-600 mt-2 hidden group-hover:block duration-300', title === 'General' && 'block')}>
            {description}
          </p>
        }
      </div>
    </div>
  );
}
