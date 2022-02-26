import { Typography, Card, CardContent, Link } from "@mui/material"

export default function Page(props) {
    return (
        <Link href={props.data.PageURL} target="_blank" underline="none">
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography variant="h6" component="div">
                        {props.data.PageTitle}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {props.data.PageSummary}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    )
}