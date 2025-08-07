interface Props {
    size: number;
}

// FIXME scale in between??
const fontSize = (size: number) => {
    if (size >= 512) {
        return 520;
    }

    if (size >= 192) {
        return 150;
    }

    if (size >= 32) {
        return 20;
    }

    return 12;
};

const Logo = ({ size }: Props) =>
    <div
        style={{
            background: 'black',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',

            fontSize: fontSize(size),
            width: `${size}px`,
            height: `${size}px`
        }}
    >
           MSG
    </div>;

export default Logo;
