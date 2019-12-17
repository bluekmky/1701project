import React from "react";
import PropTypes from "prop-types";
import { Button, Dialog } from "@material-ui/core";
import DialContnet from "./DialContent";

function SimpleDialog(props) {
    const { value, month, onClose, open } = props;

    const handleClose = () => {
        onClose();
    };

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialContnet onClose={handleClose} open={open} value={value} month={month} />
        </Dialog>
    );
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired
};

export default function SimpleDialogDemo(props) {
    const { color, month, value } = props;
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button style={{ color: color }} onClick={handleClickOpen}>
                {value}
            </Button>
            <SimpleDialog value={value} month={month} open={open} onClose={handleClose} />
        </div>
    );
}
