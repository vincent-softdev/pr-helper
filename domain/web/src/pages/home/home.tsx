import CardComponent from "../../components/card_component";

const HomePage = () => {
    const handleButton1Click = () => {
        // Define what happens when button 1 is clicked
    };

    const handleButton2Click = () => {
    // Define what happens when button 2 is clicked
    };

    return (
        <div className="page_container">
            <div className="header-ads">
                hello
            </div>
            <div className="card-list-container">
                <CardComponent
                    overline="service"
                    headline="PR Calculation"
                    content="Greyhound divisively hello coldly wonderfully..."
                    button1Text="More Detail"
                    button2Text="Access Service"
                    button1Hint="Read more detail about PR calculation"
                    button2Hint="Move to full service page"
                    cardImageUrl="https://immigrationxperts.com/australia-pr-points-calculator/images/Visa_Subclass.png"
                    onButton1Click={handleButton1Click}
                    onButton2Click={handleButton2Click}
                />
                <CardComponent
                    overline="service"
                    headline="Target Network Tracking"
                    content="Greyhound divisively hello coldly wonderfully..."
                    button1Text="More Detail"
                    button2Text="Access Service"
                    button1Hint="Read more detail about Target Network Tracking"
                    button2Hint="Move to full service page"
                    cardImageUrl="https://www.data-to-viz.com/graph/network_files/figure-html/unnamed-chunk-8-1.png"
                    onButton1Click={handleButton1Click}
                    onButton2Click={handleButton2Click}
                />
                <CardComponent
                    overline="service"
                    headline="Target Estimation"
                    content="Greyhound divisively hello coldly wonderfully..."
                    button1Text="More Detail"
                    button2Text="Access Service"
                    button1Hint="Read more detail about Target Estimation"
                    button2Hint="Move to full service page"
                    cardImageUrl=""
                    onButton1Click={handleButton1Click}
                    onButton2Click={handleButton2Click}
                />
            </div>
        </div>
    )
}

export default HomePage