import SharedButton from '@/components/Shared/SharedButton';
import Card from '../Shared/Card';
// import { Button } from '../ui/button'; // Uncomment when Button is needed

export default function latestArticle() {
  return (
    <div className='bg-secondary section-padding relative overflow-hidden  '>
      <h2 className='text-3xl font-bold text-main'>Latest Articles</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8'>
        <Card
          text1='Movment'
          textcolor='#E2EDEC'
          text2='Industrial Design'
          image='/assets/article.png'
        />
        <Card
          text1='Project'
          textcolor='#E7EAEB'
          text2='Industrial Design'
          image='/assets/article.png'
        />
        <Card
          text1='General'
          textcolor='#FEEFE5'
          text2='Industrial Design'
          image='/assets/article.png'
        />
      </div>
      <div className='flex items-center justify-center mt-8'>

        <SharedButton title='View more' bgColor='bg-main' textColor='text-white' />
      </div>
    </div>
  );
}
