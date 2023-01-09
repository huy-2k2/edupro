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
              <p className="font-semibold text-gray-600">{item.content}</p>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
