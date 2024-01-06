<template>
  <button @click="downlownPDF">Download PDF</button>
  <div id="toDoList">
    <task-list-header></task-list-header>
    <task-input></task-input>
    <task-filter
      v-if="hasTasks"
      @change-option="sortOption = $event"
    ></task-filter>
    <task-list v-if="hasTasks" :allTasks="sortedTasks()"></task-list>
    <empty-task v-if="!hasTasks"></empty-task>
    <task-management v-if="hasTasks"></task-management>
    <task-list-footer
      v-if="hasTasks"
      :pendingTasksNumber="pendingTasksNumber"
      :completionRate="completionRate"
    ></task-list-footer>
  </div>
</template>

<script>
import TaskListHeader from "../components/TaskListHeader.vue";
import TaskList from "../components/TaskList.vue";
import TaskInput from "../components/TaskInput.vue";
import TaskFilter from "../components/TaskFilter.vue";
import TaskManagement from "../components/TaskManagement.vue";
import TaskListFooter from "../components/TaskListFooter.vue";
import EmptyTask from "../components/EmptyTask.vue";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

export default {
  data() {
    return {
      sortOption: "sortByCompleted",
    };
  },
  components: {
    TaskList,
    TaskInput,
    TaskFilter,
    TaskListHeader,
    TaskManagement,
    TaskListFooter,
    EmptyTask,
  },
  computed: {
    allTasks() {
      return this.$store.getters.AllTasks;
    },
    pendingTasksNumber() {
      return this.allTasks.filter((task) => !task.isCompleted).length;
    },
    completionRate() {
      return this.allTasks.length === 0
        ? 0
        : Math.round(
            (this.allTasks.filter((task) => task.isCompleted).length /
              this.allTasks.length) *
              100
          );
    },
    hasTasks() {
      return this.allTasks.length > 0;
    },
  },
  methods: {
    sortedTasks() {
      switch (this.sortOption) {
        case "sortByName":
          return this.allTasks.sort((a, b) => {
            return a.taskName.localeCompare(b.taskName);
          });
        case "sortByDateAsc":
          return this.allTasks.sort((a, b) => {
            return new Date(a.taskDueDate) - new Date(b.taskDueDate);
          });
        case "sortByDateDesc":
          return this.allTasks.sort((a, b) => {
            return new Date(b.taskDueDate) - new Date(a.taskDueDate);
          });
        case "sortByCompleted":
          return this.allTasks.sort((a, b) => {
            return a.isCompleted - b.isCompleted;
          });
      }
    },
    downlownPDF() {
      const div = document.getElementById("toDoList");
      html2canvas(div).then((canvas) => {
        // Convert the canvas to an image data URL
        const imgData = canvas.toDataURL("image/png");

        // Create a new jsPDF instance with a standard A4 page size
        const pdf = new jsPDF("p", "pt", "a4");

        // Define margins (you can adjust these values)
        const margin = 20; // Example margin of 20 points

        // Calculate the size of the image to fit within the margins
        const pdfWidth = pdf.internal.pageSize.getWidth() - 2 * margin;
        const pdfHeight = pdf.internal.pageSize.getHeight() - 2 * margin;
        let imgWidth = canvas.width;
        let imgHeight = canvas.height;

        // Adjust the image size to maintain the aspect ratio
        if (imgWidth > pdfWidth || imgHeight > pdfHeight) {
          const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
          imgWidth = imgWidth * ratio;
          imgHeight = imgHeight * ratio;
        }

        // Calculate the position to center the image within the margins
        const x = margin + (pdfWidth - imgWidth) / 2;
        const y = margin + (pdfHeight - imgHeight) / 2;

        // Add the image to the PDF at the calculated position
        pdf.addImage(imgData, "PNG", x, y, imgWidth, imgHeight);

        // Save the PDF
        pdf.save("download.pdf");
      });
    },
  },
};
</script>

<style scoped>
div {
  margin: 0 auto;
  width: 80%;
  max-width: 600px;
  padding: 1rem;
  /* border-radius: 5px; */
  border: 5px solid #7678ed;
  background-color: white;
  margin-top: 4rem;
  margin-bottom: 4rem;
}
</style>
