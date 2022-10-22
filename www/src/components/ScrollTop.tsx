import Button from 'react-bootstrap/Button';


export default function ScrollTop() {
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
            <Button variant="none" type="button" onClick={goToTop} className="visually-hidden">
                Retour en haut de page
            </Button>
    )
}