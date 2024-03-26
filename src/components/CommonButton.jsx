const CommonButton = ({ btnText }) => {
  return (
    <button
      type="button"
      className="p-4 sm:p-5 rounded-lg w-fit capitalize bg-blue-gradient text-primary"
    >
      <a
        href="https://www.linkedin.com/in/chiheb-ben-cheikh-448552221/"
        target="_blank"
      >
        {btnText}
      </a>
    </button>
  );
};

export default CommonButton;
