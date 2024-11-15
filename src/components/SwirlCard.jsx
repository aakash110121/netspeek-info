
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { SvgMediaRowContainer } from './SVGs/SvgMediaRowContainer';
 

export const SwirlCard = ({title, bodyText, iconSrc})=>{

    return (
        
        <Card className="mid-card" elevation={4}>
        <div className="card-content-wrapper">
          <div className="card-swish-background" />
          <CardContent>
            <SvgMediaRowContainer src={iconSrc} />
            <h3 className="primary-color text-center">{title}</h3>
            <p className="black body3">
                {bodyText}  
            </p>
          </CardContent>
        </div>
      </Card>
    )
}