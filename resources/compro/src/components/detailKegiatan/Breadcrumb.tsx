

type BreadcrumbProps = {
  title: string;
  subtitle: string;
  bg_img?: string;
}


const Breadcrumb = ({ title, subtitle, bg_img }: BreadcrumbProps) => {

  return (
    <>
      <div className={`breadcrumb-wrapper ${bg_img}`}>
        <div className="container">

          <div className="breadcrumb-content">
            <h1 className="breadcrumb-title-kegiatan">{title}</h1>
            <div className="breadcrumb-menu-wrapper">
              <div className="breadcrumb-menu-wrap">
                <div className="breadcrumb-menu">
                  <ul>
                    <li aria-current="page">{subtitle}</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
