import IconCircle from '../../components/IconCircle/IconCircle';
import Button from '../../components/Button/Button';
const JobSearch = () => {
  return (
    <div className="min-h-screen bg-white flex items-center bottom-0 justify-center p-4">
      <div className="max-w-md w-full space-y-8">
        <div className="flex flex-col items-center relative bottom-0 space-y-6">
          <IconCircle />
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Find a suitable job in seconds with our advanced search features 🚀
            </h1>
            
            <p className="text-gray-600 text-sm">
              Explore thousands of exciting jobs from leading companies around the world. Loxcart is your trusted partner in finding jobs
            </p>
          </div>
          <Button className='relative bottom-0'>Submit a Proposal</Button>
        </div>
      </div>
    </div>
  );
};
export default JobSearch;
