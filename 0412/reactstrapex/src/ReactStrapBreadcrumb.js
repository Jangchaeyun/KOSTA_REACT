import { Breadcrumb, BreadcrumbItem } from "reactstrap";

const ReactStrapBreadcrumb = () => {
  return (
    <div>
      <Breadcrumb tab="nav" listTag="div">
        <BreadcrumbItem tag="a" href="http://naver.com">
          NAVER
        </BreadcrumbItem>
        <BreadcrumbItem tag="a" href="http://daum.net">
          DAUM
        </BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default ReactStrapBreadcrumb;
