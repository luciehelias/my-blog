import Item from "./MainContent/Item";

const MainContent = () => {
  return (
    <>
      <div className="ContainerMainContent">
        <Item
          Title="Title Heading"
          Subtitle="Title Description"
          Picture=""
          Description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
        />
        <Item
          Title="Title Heading"
          Subtitle="Title Description"
          Picture=""
          Description="Mauris consectetur tincidunt magna. Donec nec ipsum sem. Donec lacus nunc, pretium et erat vel, accumsan ullamcorper ipsum. Mauris non lobortis justo. Vivamus scelerisque, augue id aliquam aliquet, augue erat venenatis nulla, at ultrices nulla lectus id libero. Suspendisse sed elementum erat, quis porttitor tortor. In a congue neque."
        />
      </div>
    </>
  );
};

export default MainContent;
