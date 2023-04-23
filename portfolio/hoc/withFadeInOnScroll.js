import { useInView } from 'react-intersection-observer';

export default function withFadeInOnScroll(Component) {
  return function WrappedComponent(props) {
    const [ref, inView] = useInView({
      threshold: 0.2,
    });

    return (
      <div
        ref={ref}
        className={`transition-opacity duration-1000 ease-in-out ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Component {...props} />
      </div>
    );
  };
}
