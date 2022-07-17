import React from "react";
import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.loading}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          viewBox="0 0 513.002 608.002"
        >
          <path d="M413.818 29.639L368.602 0C335.92 17.861 304.381 28.118 273.6 30.783h-34.2c-30.02-2.665-61.939-12.921-95-30.783L99.561 29.639 112.1 51.301 90.82 61.94l-15.2-16.722L28.5 76c31.92 69.918 41.04 137.562 26.6 203.682l-4.18 17.858C40.661 333.64 23.561 368.98 0 402.802c12.92 22.036 28.5 43.314 47.12 63.079l-20.14 26.221 60.8 54.336 26.981-21.278c40.278 29.257 87.778 57 141.739 82.843 54.719-25.843 101.838-53.586 141.736-82.843l27.365 21.278 60.418-54.336-19.762-26.221c18.244-19.379 33.822-40.279 46.744-63.079-23.184-33.821-39.9-68.784-50.543-105.262l-4.557-17.858c-2.281-13.299-4.182-23.182-4.943-29.642-2.279-21.657-2.279-43.322 0-64.601 4.561-36.856 14.82-73.339 31.543-109.439l-46.744-30.782-15.198 16.722-21.656-10.639 12.915-21.662z" />
          <path
            d="M398.236 33.062L368.22 13.301c-31.92 16.338-63.084 26.218-93.484 28.882h-36.097c-30.02-2.664-61.178-12.543-93.479-28.882l-30.399 19.761 7.219 12.539c1.139 1.139 1.52 3.039 1.52 5.7 0 2.66-.381 4.561-1.52 6.082-1.141 1.518-2.661 3.035-4.56 4.179L96.139 72.2c-2.659 1.14-4.939 1.518-7.219 1.14-2.281-.379-4.559-1.9-6.459-3.8l-8.741-9.5-30.78 20.143c30.4 69.157 38 136.418 23.18 202.157l-.759 3.8H448.02l-1.139-3.8c-11.021-50.921-9.123-102.6 6.078-154.657 4.943-16.721 10.643-33.064 17.479-47.5l-30.78-20.143-8.738 9.5c-2.281 2.278-4.184 3.421-6.461 3.8-2.277.378-4.557 0-7.221-1.14l-21.279-10.639c-1.521-1.144-3.039-2.661-4.557-4.179-1.145-1.521-1.9-3.422-1.9-6.082 0-1.9.756-3.8 1.518-5.7l7.216-12.538z"
            fill="#cd3529"
          />
          <path
            d="M278.158 92.34l-2.277.761-1.145 1.9c-.756 4.561-2.275 7.6-4.938 10.261-1.898 1.9-4.938 2.657-8.359 2.657-3.801 0-6.839-.757-9.12-2.279v-.378a15.96 15.96 0 0 1-4.939-6.843c-.761-3.035-1.52-6.457-1.52-11.018s.759-8.36 1.9-10.639h-.38c1.52-3.421 3.42-5.322 5.32-6.46 1.9-1.9 5.319-2.661 8.739-2.661 3.799 0 6.461.761 8.742 2.661 2.279.761 3.418 3.039 3.799 6.46.379.378.756 1.139 1.139 1.9.383.379 1.139.757 2.283.757h7.6c.758 0 1.135-.378 1.9-.378.756-.379 1.135-.758 1.135-1.521l.383-1.9c-1.141-7.218-4.184-12.157-9.5-15.957-5.32-3.8-11.02-5.7-17.48-5.7-5.32 0-9.5.757-13.3 2.657-3.8 1.9-6.839 4.183-9.5 7.222v.378c-2.278 3.043-4.178 6.465-5.699 10.644-1.52 3.8-2.279 7.979-2.279 12.921 0 8.736 2.279 15.957 6.459 22.036 1.52 3.043 4.181 5.321 7.98 7.982.761 0 1.14 0 1.52.761 3.8 1.899 7.98 3.039 13.3 3.421.381-.382.381-.382.381 0 .76-.382.76-.382.76 0 4.939-.382 9.5-1.522 12.539-3.043.76-.378 1.137-.378 1.902-1.139 3.035-1.9 5.699-4.562 8.357-8.361 3.043-3.8 4.561-7.978 4.943-13.3 0-1.139 0-1.9-.383-1.9 0-.757-.383-1.521-1.141-1.521-.76-.378-1.143-.378-1.898-.378h-7.223v-.003zM161.5 273.218c0-4.557-1.139-7.979-3.419-10.635-1.899-3.043-4.561-5.322-8.361-6.844-3.8-1.139-7.6-1.521-10.639-1.521H111.34l-1.52 1.143c-.759.378-1.139 1.139-1.139 2.278V315.4l.759 2.282h.38c.38.757 1.142 1.135 2.28 1.135h7.6c1.139 0 1.9-.378 2.28-1.135.759-.383 1.139-1.144 1.139-2.282v-21.66h15.961c2.28 0 4.18.378 4.939 1.521l.38.379c.761 1.143 1.14 2.661 1.14 5.321l.38 4.179v.379l.38 5.699c0 1.9.38 3.8 1.14 5.321.76.761 1.141 1.144 1.141 1.521.759 0 1.139.379 1.9.757h9.5c1.139 0 1.899-.378 2.28-1.135.759-.383 1.139-1.144 1.139-2.282v-1.519c0-.764 0-1.521-.38-1.521l-1.9-1.521c0-.379 0-.757-.38-.757l-.759-12.165v-.378c0-4.179-.761-7.222-2.661-9.5-.38-.379-.759-.758-1.52-1.521.381 0 .381-.379.381-.379l2.28-2.278c2.28-3.043 3.04-6.461 3.04-10.643zm-23.561 7.221h-14.82V267.9h16.341c4.559 0 6.839 1.9 6.839 6.082 0 1.518-.38 3.418-1.52 4.936-1.14.764-3.799 1.521-6.84 1.521zM402.037 279.682c-.758-.764-1.518-.764-2.279-.764h-24.699V267.9h28.879l2.281-1.139.762-2.279v-6.843c0-.757 0-1.521-.762-2.278l-2.281-1.143h-39.9c-.758 0-1.9.382-2.656 1.143-.379.757-.762 1.521-.762 2.278V315.4c0 .761.383 1.518.762 2.282.756.757 1.898 1.135 2.656 1.135h7.6l2.283-1.135c.76-.383 1.139-1.144 1.139-2.282v-22.8h24.699c1.145 0 1.9-.382 2.279-1.14.764-.378 1.143-1.143 1.143-2.278v-7.221l-1.144-2.279z"
            fill="#fff"
          />
          <path
            d="M114.38 223.062c0 4.557 1.52 8.356 3.8 11.399 2.659 3.039 5.7 4.939 9.5 4.939s7.219-1.9 9.12-4.939l.761-.76h40.659c12.919 18.239 25.841 35.718 38 52.439l26.98 35.343v11.778l-7.98 10.642c-6.839 9.5-20.519 25.835-39.9 49.399-.38.379-.38.379-.38.757h-.378v.379c-.38 0-.761.379-1.141 1.143l-13.681-12.543-11.4 12.922 14.061 12.543-31.919 34.957c-12.161-9.121-24.701-20.521-36.481-34.957l15.581-15.2c-18.241-13.3-31.541-32.686-39.899-58.901-16.72 39.901-19.761 76.002-9.5 108.302l17.099-17.101c12.54 13.679 24.32 25.836 36.1 36.101l-21.28 22.8c2.661 10.636 6.461 14.057 11.4 9.5l20.899-23.186c28.12 22.8 61.562 43.699 101.081 63.464l11.019 5.321c42.18-19.764 79.42-42.564 112.48-68.785l20.9 23.186c4.557 4.557 8.355 1.136 11.398-9.5l-21.66-22.8c12.918-11.021 25.082-23.187 36.482-36.101l17.1 17.101c10.258-33.064 7.219-69.165-9.5-108.302-8.363 26.216-21.664 45.602-39.898 58.901l15.199 15.2c-11.783 14.057-23.943 25.836-36.1 34.957l-31.543-34.957 13.299-12.164-11.4-12.922-13.299 12.164c0-.378-.379-.764-.758-1.143-19.764-23.557-36.48-44.078-49.402-61.177v-11.778l27.361-35.343c18.619-25.078 31.158-42.557 37.621-52.439h40.656l.766.76c2.656 3.039 5.699 4.939 9.5 4.939 3.799 0 7.217-1.9 9.5-4.939 2.656-3.421 3.799-7.221 3.799-11.399 0-3.801-1.143-7.601-3.799-11.4-2.666-3.043-5.701-4.561-9.5-4.561-3.424 0-6.844 1.518-9.5 4.561l-1.9 3.04h-26.602c30.4-46.361 48.637-83.6 55.1-112.1h-64.6c7.6 30.018.758 67.261-20.143 112.1h-48.26v-18.618c7.604-1.521 14.438-4.183 20.904-7.982 10.256-6.839 15.199-14.439 15.199-22.8 0-9.118-4.943-16.718-15.199-22.801-4.943-3.039-10.266-5.317-15.967-6.839-4.938-1.521-10.637-2.278-17.098-2.661-7.978.382-14.438 1.139-18.619 2.661-4.939.757-9.5 2.657-14.439 5.7-.38 0-1.141.378-1.9 1.139-9.88 5.701-15.2 13.301-15.2 22.801 0 8.739 5.32 16.339 15.2 22.8l4.559 2.661c5.7 2.279 11.021 4.178 15.96 5.322v18.618h-48.261c-20.52-45.218-27.359-82.839-19.758-112.1h-64.601c6.459 28.118 24.7 65.739 55.101 112.1h-26.98l-1.9-3.04c-2.281-3.043-5.32-4.561-9.12-4.561-3.8 0-6.841 1.518-9.5 4.561-2.279 3.038-3.799 6.837-3.799 11.399zm141.359-82.844h.38c11.021.765 19.761 3.043 26.601 7.222 7.598 4.178 11.398 10.26 11.398 17.478 0 6.843-3.801 12.543-11.398 17.482-7.219 3.8-14.82 6.082-23.182 6.839l-2.659.379h-.38c-.38-.379-.761-.379-1.139-.379h-.76c-8.739-.757-16.339-3.039-22.8-6.839-8.361-4.939-12.161-10.639-12.161-17.482 0-7.218 3.8-13.3 12.161-17.478 6.08-4.179 14.061-6.457 23.561-7.222h.378zm-51.3 93.483H243.2v63.46l-11.02-17.1c-9.119-14.443-18.619-30.021-27.741-46.36zm65.36 0h38.76c-10.256 19.76-20.9 37.239-31.539 52.439l-7.221 11.021v-63.46zm41.42 169.858l-13.299 11.779 11.398 12.543 12.92-11.4 29.643 34.578c-20.143 12.543-41.422 19.379-63.078 20.144-3.801-.386-9.883-6.465-19.004-17.486V354.16c15.961 19.378 29.26 35.343 40.66 48.257 0 .385.379.764.76 1.142zm-108.679 0l40.661-49.399v99.557l-1.9 2.665c-7.98 9.5-13.3 14.436-16.72 14.821-21.66-.765-42.561-7.601-63.081-20.144l30.02-34.578 12.161 11.021 11.4-12.543-12.541-11.4z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  );
};

export default Loading;
