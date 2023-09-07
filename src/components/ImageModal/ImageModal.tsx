import "./ImageModal.scss";

interface ImageModalProps {
  image: string;
  onClose?: () => void;
}

export const ImageModal = (props: ImageModalProps) => {
  const { image, onClose } = props;

  return (
    <div className="imageModalContainer" onClick={onClose}>
      <div className="imageModalBackground" />
      <div className="imageContainer">
        <img src={image} alt="Preview" className="image" />
      </div>
    </div>
  );
};
