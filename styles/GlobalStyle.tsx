const GlobalStyle = (props: any) => {
  return (
    <div className="page-layout">
      {props.children}
      <style jsx global>
        {`
          * {
            margin: 0;
            padding: 0;
            border: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            box-sizing: border-box;
          }

          :root {
            --primary: #6d6afe;
            --red: #ff5b56;
            --black: #111322;
            --white: #ffffff;

            --gray100: #373740;
            --gray60: #9fa6b2;
            --gray20: #ccd5e3;
            --gray10: #e7effb;
            --gray06: #666;

            --card-background: #dddfff;

            --background: #f0f6ff;

            --gra-purpleblue-to-skyblue: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
            --gradation: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
          }
        `}
      </style>
    </div>
  );
};

export default GlobalStyle;
