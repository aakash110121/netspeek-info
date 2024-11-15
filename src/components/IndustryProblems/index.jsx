import { CTAButton } from "../CTAButton";
import { SvgMediaRowContainer } from "../SVGs/SvgMediaRowContainer";

   
import ConnectSvg from "../../assets/svg/connect-icon-large-primary.svg";
import WorkerSvg from "../../assets/svg/worker-icon-large-primary.svg"; 
import ToolsSvg from "../../assets/svg/tools-icon-large-primary.svg"; 
import { Card, CardContent } from "@mui/material";


export const IndustryProblems = () => {

    return (
        <div className="mid-content">
        <h2 className="primary-color">Service Stack</h2>
        <div className="mid-cards-container">
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={ConnectSvg} />
                <h3 className="primary-color text-center">Solution-oriented approach</h3>
                <p className="black body3">
                  Cure the headaches of Pro AV device management with our unified solution. Streamline interoperability issues as our platform effortlessly integrates diverse devices, offering optimized management and monitoring for peak performance.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={WorkerSvg} />
                <h3 className="primary-color text-center">Expert support network</h3>
                <p className="black body3">
                    Say goodbye to talent shortages as our comprehensive solutions provide access to skilled professionals, ensuring smooth execution and successful outcomes for your projects.
                </p>
              </CardContent>
            </div>
          </Card>
          <Card className="mid-card" elevation={4}>
            <div className="card-content-wrapper">
              <div className="card-swish-background" />
              <CardContent>
                <SvgMediaRowContainer src={ToolsSvg} />
                <h3 className="primary-color text-center">Comprehensive suite of tools</h3>
                <p className="black body3">
                  Our products solve compatibility issues as our integrated solutions streamline device management, providing a cohesive platform for simplified control and enhanced performance across your entire AV ecosystem.
                </p>
              </CardContent>
            </div>
          </Card>
        </div>         
      </div>
    );
}