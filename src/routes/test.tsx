import { component$ } from "@builder.io/qwik";
import { useTheme } from "~/lib/provider";


export const Test = component$(() => {
  const { themeSig } = useTheme();

  return (
    <div
      style={{
        
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
  
      <button
        type="button"
        onClick$={() => {
          themeSig.value = "theme-yellow";
        }}
      >
        yellow
      </button>
      <button
        type="button"
        onClick$={() => {
          themeSig.value = "theme-green";
        }}
      >
        brutalist green 
      </button>
      <button
        type="button"
        onClick$={() => {
          themeSig.value = "theme-blue";
        }}
      >
        blue
      </button>

      <button
        type="button"
        onClick$={() => {
          themeSig.value = "theme-red";
        }}
      >
        red
      </button>
      <button
        type="button"
        onClick$={() => {
          themeSig.value = "theme-indigo";
        }}
      >
        indigo
      </button>

      <button
        type="button"
        onClick$={() => {
          themeSig.value = "theme-purple";
        }}
      >
        purple
      </button>
    </div>
  );
});
