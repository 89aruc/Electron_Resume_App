import Sidenav from "Components/Sidenav";
import 'Components/MainPage/MainPage.less';
import { useSelector } from "react-redux";
import { getCurrentPage } from "Data/Selectors/Navigation";
import { Pages } from "@/Data/Objects/State";
import { useEffect } from "react";

export default function MainPage() {
    const currentPage = useSelector(getCurrentPage);
    useEffect(() => {
        const result = (Object.keys(Pages) as (keyof typeof Pages)[]).map(
            (key, index) => {
              console.log(key);
              return Pages[key] + index;
            },
          );
          
          // 👇️ ['S0', 'M1', 'L2']
          console.log(result);
    }, [])

    const renderPageContent = () => {
        const content = (Object.keys(Pages) as (keyof typeof Pages)[]).map((key) => {
            switch (currentPage) {
                case key:
                    return <h2>{key} Content</h2>
            }
            },
          );
        return content;
    }

    return (
        <div className="mainPage">
            <Sidenav />
            <div className="pageContent">
                { renderPageContent() }
            </div>
        </div>
    )
}