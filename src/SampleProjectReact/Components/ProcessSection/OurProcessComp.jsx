import React from "react";
import { List, ListItem } from "@mui/material";
import logo from "../../assets/CompanyLogo.svg";
import { useState } from "react";
import "../OfferingsSection/offering.scss";


const OurProcessComp = () => {
  const Offerings = [
    {
      id: "1",
      question:
        "Create some offerings to enhance the quality of education provided by our school. How can we do this effectively?",
      answer:
        "One way to create some offerings is to partner with industry experts and local organizations. By doing this, we can gain access to real-world knowledge and experiences, which can be integrated into our curriculum. Additionally, offering specialized workshops and training sessions can provide our students with practical skills that can be applied in the real world.",
    },
    {
      id: "2",
      question:
        "What is the significance of having a diverse offering of offerings for students?",
      answer:
        "A diverse offering of offerings allows students to explore a variety of interests and passions. By providing students with different offerings, we can foster their curiosity and encourage them to become well-rounded individuals. Moreover, a diverse offering of offerings can also attract more diverse student populations, leading to a more inclusive learning environment.",
    },
  ];

  const [answer, setAnswer] = useState(false);
  const handleImage = (id) => {
    setAnswer((answer) => ({
      [id]: !answer[id],
    }));
  };
  return (
    <div className="offerings">
      <div className="offeringSection">
        <div className="border"></div>
        <div className="background">
          <p className="headingText">Our Process</p>
        </div>
      </div>
      <div className="contentText">
        <List>
          {Offerings.map((item) => (
            <>
              <ListItem
                key={item.id}
                sx={{
                  borderBottom: "1px solid #FFF",
                  lineHeight: "26px",
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "62px",
                }}
              >
                <div style={{padding:"16px 0"}}>
                  {item.question}
                  {answer[item.id] && (
                    <p
                      style={{
                        color: "rgb(86, 201, 230)",
                      }}
                    >
                      {item.answer}
                    </p>
                  )}
                </div>

                <img
                  style={{ width: "20px", height: "20px", cursor: "pointer" }}
                  onClick={() => {
                    handleImage(item.id);
                  }}
                  src={logo}
                />
              </ListItem>
            </>
          ))}
        </List>
      </div>
    </div>
  );
};
export default OurProcessComp;
