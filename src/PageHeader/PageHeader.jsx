import classNames from './PageHeader.module.css';

function PageHeader() {
  return (
    <div className='bg-white flex justify-between px-8 py-4 shadow-md'>
      <div>AskTogether</div>
      <button>Login</button>
    </div>
  );
}   

export default PageHeader;                      