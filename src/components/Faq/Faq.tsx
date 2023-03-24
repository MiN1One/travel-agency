import { IFaqItem } from "@/interfaces/home.interface";
import { memo } from "react";
import Collapsible from "react-collapsible";
import classes from './Faq.module.scss';
import { TfiPlus } from 'react-icons/tfi';
import classNames from "classnames";
import SafeHydrate from "../Common/SafeHydrate";

interface FaqProps {
  items: IFaqItem[];
}

function Faq({ items }: FaqProps) {

  const faqItemEls = items?.map((item, index) => {
    return (
      <Collapsible 
        key={index}
        id={index.toString()}
        contentContainerTagName="li" 
        openedClassName={classNames(classes.active, classes.item)}
        trigger={(
          <span className={classes.btn}>
            {item.question} <TfiPlus />
          </span>
        )}
        transitionTime={200}
        contentOuterClassName={classes.itemContentWrapper}
        contentInnerClassName={classes.itemContent}
        className={classes.item} 
        title={item.question}
      >
        {item.answer}
      </Collapsible>
    );
  });

  return (
    <SafeHydrate>
      <section id="for-tourists" className={classes.faq}>
        <div className="container">
          <div className={classes.content}>
            <ul className={classes.list}>
              {faqItemEls}
            </ul>
          </div>
        </div>
      </section>
    </SafeHydrate>
  );
}

export default memo(Faq);