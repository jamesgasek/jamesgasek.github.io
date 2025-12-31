"use client"

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function CalPopup() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const handleClick = async () => {
    const cal = await getCalApi({"namespace":"30min"});
    cal("modal", {"calLink":"james-gasek-hxpeiy/30min","config":{"layout":"month_view"}});
  };

  return (
    <a className="cursor-pointer" onClick={handleClick}>
      schedule a meeting
    </a>
  );
}
