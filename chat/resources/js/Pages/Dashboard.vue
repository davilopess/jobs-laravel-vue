<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                
            </h2>
        </template>

        <div class="bg-violet-700 h-48">
            <div class="max-w-8xl mx-auto sm:px-12 lg:px-12">
                    <div class="w-full  bg-opacity-25 p-6">
                        <form>
                            <div class="flex rounded-md overflow-hidden border border-gray-300">
                            <input type="text" class="flex-1 px-4 py-2 text-sm focus:outline-none" placeholder="Encontre o que você precisa...">
                            <button type="submit" class="bg-violet-500 hover:bg-indigo-600 text-white px-4 py-2">
                                <SearchIcon class="h-6 w-6 text-white-500"/>            
                            </button>
                            </div>
                        </form>
                    </div>
            </div>
        </div>
        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                    <welcome />
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import Welcome from '@/Jetstream/Welcome.vue'
    import { SearchIcon } from '@heroicons/vue/solid'
    export default defineComponent({
        components: {
            AppLayout,
            Welcome,
            SearchIcon
        },
    })
</script>
