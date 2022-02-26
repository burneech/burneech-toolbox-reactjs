import { Typography, Accordion, AccordionSummary, AccordionDetails, } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Subcategory from "./Subcategory"
import Page from "./Page"

export default function Category(props) {
    if (props.data.Subcategories.length > 1) {
        // If there are multiple subcategories for this category, show the subcategories accordion
        const Subcategories = props.data.Subcategories.map((subcategory) => {
            return <Subcategory data={subcategory} key={subcategory.SubcategoryTitle} />
        })

        return (
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <div>
                        <Typography variant="h5">{props.data.CategoryTitle}</Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary">{props.data.CategorySummary}</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    <div>
                        {Subcategories}
                    </div>
                </AccordionDetails>
            </Accordion>
        )
    }
    else {
        // If there is only 1 subcategory, show that subcategory's pages directly
        const PagesList = props.data.Subcategories[0].SubcategoryPages.map((page) => {
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
                        <Typography variant="h5">{props.data.CategoryTitle}</Typography>
                        <Typography gutterBottom variant="body2" color="text.secondary">{props.data.CategorySummary}</Typography>
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
}