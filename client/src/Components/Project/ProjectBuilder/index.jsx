import Base from "../Base";
import Sidebar from "../Sidebar";
import Properties from "../Properties";
import { useState } from 'react';

export default function UseCaseBuilder() {

  const [template, setTemplate] = useState("software");
  return (
    <div className="formbuilder">
      <Sidebar onClick={(e) => {

        console.log("i am clicked", e.target.id);
        setTemplate(e.target.id);
      }} />
      <Base
        templateID={template}
      // onPaneClick={onPaneClick}
      // onDragOver={onDragOver}
      // onDrop={onDrop}
      // elements={elements}
      // changeFormName={changeFormName}
      // copyNode={copyNode}
      // handleSelectNode={handleSelectNode}
      // handleMultipleSelectNode={handleMultipleSelectNode}
      // handleMultiplesSelectNode={handleMultiplesSelectNode}
      // changePosition={changePosition}
      />
      <Properties
      // onSelectChange={onSelectChange}
      // onSelectColumns={onSelectColumns}
      // changeName={handleChangeName}
      // changeFormName={changeFormName}
      // onChangeSize={labelSize}
      // onChangeAlignment={labelAlignment}
      // changeFontWeight={labelFontWeight}
      // changeTextTransform={labelTextTransform}
      // changeCheckboxQuestion={checkboxQuestion}
      // addCheckbox={addCheckbox}
      // changeSpacing={changeSpacing}
      // onChangeCode={handleCodeChange}
      // selectImage={handleSelectImage}
      // imageHeight={handleImageHeight}
      // imageWidth={handleImageWidth}
      // changeLink={handleChangeLink}
      // alertMessage={handleAlertMessage}
      // alertType={handleAlertType}
      // nodeDetail={nodeProperty}
      // // For Dropdown
      // addDropdownOpt={addDropdownOpt}
      // remDropdownOpt={remDropdownOpt}
      // visible={propertyVisible}
      />
    </div>
  );
}