import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheets } from '@material-ui/styles'
import theme from '~/src/theme'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheets = new ServerStyleSheets();
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });
    
    
        const initialProps = await Document.getInitialProps(ctx)
        return { 
            ...initialProps,
            styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name="theme-color" content={theme.palette.primary.main} />
                    <link rel="shortcut icon" href="/images/favicon.ico" />
                    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/css/typography.css" />
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    <link rel="stylesheet" href="/assets/css/responsive.css" />
                </Head>
                <body>
                    <Main />
                    <script src="/assets/js/jquery.min.js"></script>
                    <script src="/assets/js/popper.min.js"></script>
                    <script src="/assets/js/bootstrap.min.js"></script>
                    <script src="/assets/js/jquery.appear.js"></script>
                    <script src="/assets/js/countdown.min.js"></script>
                    <script src="/assets/js/waypoints.min.js"></script>
                    <script src="/assets/js/jquery.counterup.min.js"></script>
                    <script src="/assets/js/wow.min.js"></script>
                    <script src="/assets/js/apexcharts.js"></script>
                    <script src="/assets/js/slick.min.js"></script>
                    <script src="/assets/js/select2.min.js"></script>
                    <script src="/assets/js/owl.carousel.min.js"></script>
                    <script src="/assets/js/jquery.magnific-popup.min.js"></script>
                    <script src="/assets/js/smooth-scrollbar.js"></script>
                    <script src="/assets/js/lottie.js"></script>
                    <script src="/assets/js/core.js"></script>
                    <script src="/assets/js/charts.js"></script>
                    <script src="/assets/js/animated.js"></script>
                    <script src="/assets/js/kelly.js"></script>
                    <script src="/assets/js/maps.js"></script>
                    <script src="/assets/js/worldLow.js"></script>
                    <script src="/assets/js/style-customizer.js"></script>
                    <script src="/assets/js/chart-custom.js"></script>
                    <script src="/assets/js/custom.js"></script>
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument