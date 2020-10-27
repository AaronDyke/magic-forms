<script lang="ts">
  import MagicForm from "./magic-forms/MagicForm.svelte";

  type magicFieldType =
    | "select"
    | "multiselect"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "search"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";

  interface MagicFormField {
    id: string;
    label: string;
    type: magicFieldType;
    defaultValue?: any;
    options?: { label: string; value: any }[];
  }

  const allFieldTypes = [
    "checkbox",
    "color",
    "date",
    "datetime-local",
    "email",
    "file",
    "month",
    "number",
    "password",
    "radio",
    "range",
    "search",
    "tel",
    "text",
    "time",
    "url",
    "week",
  ];

  let formFields: MagicFormField[] = [
    ...allFieldTypes.map((fieldType) => {
      return {
        id: fieldType.toUpperCase(),
        label: fieldType.toLocaleUpperCase(),
        type: fieldType,
      } as MagicFormField;
    }),
    {
      id: "SELECT",
      label: "Select",
      type: "select",
      options: [
        { label: "Option1", value: 1 },
        { label: "Option2", value: 2 },
        { label: "Option3", value: 3 },
      ],
    },
    {
      id: "MULTISELECT",
      label: "MultiSelect",
      type: "multiselect",
      options: [
        { label: "Option1", value: 1 },
        { label: "Option2", value: 2 },
        { label: "Option3", value: 3 },
        { label: "Option4", value: 4 },
	  ],
    },
  ];

  let model = {};

  $: {
    console.log("model", model);
  }
</script>

<main>
  <MagicForm fields={formFields} bind:formModel={model} />
</main>
