import { Typography, Chip, Card, CardContent, Link } from "@mui/material"

export default function Page(props) {
    // Will allow tags to be shown if they exist in the data
    let hasTags = false
    let Tags = []
    if (props.data.PageTags !== undefined) {
        hasTags = true
        Tags = props.data.PageTags.map((tag) => {
            return (
                <Chip label={tag} variant="outlined" color="info" size="small" sx={{ mr: 0.5 }} />
            )
        })
    }

    return (
        <Link href={props.data.PageURL} target="_blank" underline="none">
            <Card>
                <CardContent>
                    <Typography variant="h6">
                        {props.data.PageTitle}
                    </Typography>
                    <Typography sx={{ mb: 0.5 }} color="text.secondary">
                        {props.data.PageSummary}
                    </Typography>
                    {hasTags && Tags}
                </CardContent>
            </Card>
        </Link>
    )
}