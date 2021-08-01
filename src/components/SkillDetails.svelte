<script lang="ts">
  export let skillName: string;
  export let percent: number;
  export let skillLevel: string;
</script>

<div class="flex flex-col w-full">
  <div class="relative pt-1">
    <div class="flex items-center justify-between mb-2 mr-5">
      <div class="text-xl font-semibold" style="color: #778492">{skillName}</div>
      <div class="text-sm text-gray-400">{skillLevel}</div>
    </div>
    <div class="flex h-4 mb-4 mr-5 overflow-hidden text-xs bg-green-300 rounded">
      <div
        style={`width:${percent}%`}
        class="flex flex-col justify-center text-center text-white bg-green-500 shadow-none whitespace-nowrap"
      />
    </div>
  </div>
</div>
