import { Typography, Accordion, AccordionSummary, AccordionDetails } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Page from "./Page"

export default function Subcategory(props) {
    const PagesList = props.data.SubcategoryPages.map((page) => {
        return <Page data={page} key={page.PageTitle} />
    })

    return (
        <Accordion>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <div>
                    <Typography variant="h5">{props.data.SubcategoryTitle}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <div>
                    {PagesList}
                </div>
            </AccordionDetails>
        </Accordion>
    )
}