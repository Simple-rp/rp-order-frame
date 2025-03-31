import { useSearchParams } from "react-router-dom";

const DebugStats = () => {
  const [searchParams] = useSearchParams();

  if (searchParams.get("debugMode"))
    return (
      <div
        className="tooltip tooltip-left"
        data-tip={window.location.href}
      >
        Debug Stats
      </div>
    );
  else <></>;
};

export default DebugStats;
