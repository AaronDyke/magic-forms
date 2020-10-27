<!-- Form Elements to implement -->
<!-- https://www.w3schools.com/html/html_form_elements.asp -->

<script lang="ts">
  import { onMount } from "svelte";

  type magicFieldType = 'select' | 'multiselect' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';

	interface MagicFormField {
		id: string,
		label: string,
		type: magicFieldType,
		defaultValue?: any,
    options?: { label: string, value: any}[],
  }
  
  export let fields: MagicFormField[];
  export let formModel = {};

  fields.forEach((field: MagicFormField) => {
      console.log('field', field);
      if (field.type === 'color' && !field.defaultValue) {
        // no default color, set to black 
        formModel[field.id] = "#000000";
      } else if (field.type === 'multiselect' && !field.defaultValue) {
        // no default value, set to empty array 
        formModel[field.id] = [];
      } else {
        formModel[field.id] = field.defaultValue;
      }
    });
</script>

<form>
  {#each fields as field}
    <label for={field.id}>{field.label}</label>
    {#if field.type === 'select' && field.options}
      <select id={field.id} name={field.id} bind:value={formModel[field.id]}>
        {#each field.options as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    {:else if field.type === 'multiselect' && field.options}
      <select multiple id={field.id} name={field.id} bind:value={formModel[field.id]}>
        {#each field.options as option}
          <option value={option.value}>{option.label}</option>
        {/each}
      </select>
    {:else if field.type === 'checkbox'}
      <input
        type="checkbox"
        id={field.id}
        name={field.id}
        bind:checked={formModel[field.id]} />
    {:else if field.type === 'color'}
      <input
        type="color"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'date'}
      <input
        type="date"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'datetime-local'}
      <input
        type="datetime-local"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'email'}
      <input
        type="email"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'file'}
      <input
        type="file"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'month'}
      <input
        type="month"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'number'}
      <input
        type="number"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'password'}
      <input
        type="password"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'radio'}
      <input
        type="radio"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'range'}
      <input
        type="range"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'search'}
      <input
        type="search"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'tel'}
      <input
        type="tel"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'text'}
      <input
        type="text"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'time'}
      <input
        type="time"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'url'}
      <input
        type="url"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {:else if field.type === 'week'}
      <input
        type="week"
        id={field.id}
        name={field.id}
        bind:value={formModel[field.id]} />
    {/if}
  {/each}
</form>
