import classNames from './PageHeader.module.css';

function PageHeader() {
  return (
    <div className={classNames.pageHeader}>
      <div>AskTogether</div>
      <button>Login</button>
    </div>
  );
}   

export default PageHeader;                      