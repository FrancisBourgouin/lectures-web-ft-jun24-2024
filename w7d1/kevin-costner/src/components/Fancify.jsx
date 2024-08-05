export default function Fancify(props) {
  const { children } = props;

  return (
    <>
      <span>✨✨💫💫💫🌟🌟⭐⭐⭐⭐</span>
      <span>{children}</span>
      <span>✨✨💫💫💫🌟🌟⭐⭐⭐⭐</span>
    </>
  );
}
