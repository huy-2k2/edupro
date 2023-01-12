import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
export default function AccordionBase({ data }) {
  return (
    <div className="w-full overflow-hidden bg-white rounded-lg">
      <Accordion preExpanded={["a"]}>
        {data.map((item, index) => (
          <AccordionItem uuid={index === 0 ? "a" : index}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.title}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="custom-scrollbar custom-scollbar flex flex-col gap-y-2 font-semibold text-gray-600 max-h-[220px] overflow-y-auto">
                {item.contents.map((content) => (
                  <p>{content}</p>
                ))}
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
