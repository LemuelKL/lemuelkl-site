/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

interface LocalWeatherData {
  generalSituation: string;
  tcInfo: string;
  fireDangerWarning: string;
  forecastPeriod: string;
  forecastDesc: string;
  outlook: string;
  updateTime: string;
}

export const handler: Handlers<LocalWeatherData | null> = {
  async GET(_, ctx) {
    const { type } = ctx.params ? ctx.params : { type: "flw" };
    const resp = await fetch(
      `https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=${type}&lang=en`,
    );
    if (resp.status !== 200) {
      return ctx.render(null);
    }
    const data: LocalWeatherData = await resp.json();
    return ctx.render(data);
  },
};

export default function Page({ data }: PageProps<LocalWeatherData | null>) {
  if (!data) {
    return <h1>Weather data not available</h1>;
  }

  const displayTime = new Date(data.updateTime).toLocaleTimeString("en-HK");

  return (
    <div
      class={tw
        `bg-coolGray-200 h-screen flex justify-center items-center bg-gradient-to-br from-yellow-50 via-blue-200 to-coolGray-300`}
    >
      <div
        class={tw
          `mx-auto max-w-screen-md bg-white rounded-xl p-6 flex flex-col items-center gap-8 shadow-2xl`}
      >
        {WeatherItem(data.forecastPeriod, data.forecastDesc)}
        {/* {WeatherItem('Outlook', data.outlook)} */}
        <div class={tw`self-end`}>{displayTime}</div>
      </div>
    </div>
  );
}

function LocalWeatherCard();

function WeatherItem(type: string, text: string) {
  return (
    <div class={tw`flex flex-col items-center gap-3`}>
      <div class={tw`text-capitalize font-italic text-2xl`}>{type}</div>
      <div>{text.length > 0 ? text : "Not available"}</div>
    </div>
  );
}
