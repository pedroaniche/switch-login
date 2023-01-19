(() => {
    const tabs = document.querySelectorAll('[data-tab]');

    hideContents = () => {
        const contents = document.querySelectorAll('[data-content]');

        contents.forEach(content => content.classList.add('hide'));
    }

    deactivateTabs = () => {
        tabs.forEach(tab => tab.classList.remove('active'));
    }

    showContent = (value) => {
        const content = document.querySelector(`[data-content="${value}"]`);

        content.classList.remove('hide');
    }

    activateTab = (tab) => {
        tab.classList.add('active');
    }

    tabs.forEach(tab => tab.addEventListener('click', () => {
        const value = tab.dataset.tab;

        hideContents();
        deactivateTabs();
        showContent(value);
        activateTab(tab);
    }))
}) ()