import Stories from 'react-insta-stories';

export const ModalStories = ({ stories, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-black p-4 rounded-lg shadow-xl max-w-sm w-full">
        <Stories
          stories={stories}
          defaultInterval={3000}
          width="100%"
          height={500}
        />
        <button
          onClick={onClose}
          className="mt-4 w-full bg-green-500 text-black py-2 rounded"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};
