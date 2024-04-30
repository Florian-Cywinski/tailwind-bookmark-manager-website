const tabs = document.querySelectorAll('.tab')    // To get an array like NodeList with all elements containing the class of tab
const panels = document.querySelectorAll('.panel')

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener('click', onTabClick))

function onTabClick(e) {
  // Deactivate (removes the red active underline) all tabs
  tabs.forEach((tab) => {
    tab.children[0].classList.remove(   // Takes the first children and removes the following classes
      'border-softRed',
      'border-b-4',
      'md:border-b-0'
    )
  })

  // Hide all panels to afterwards decide which one shall be shown
  panels.forEach((panel) => panel.classList.add('hidden'))

  // Activate a new tab and panel based on the target
  e.target.classList.add('border-softRed', 'border-b-4')
  const classString = e.target.getAttribute('data-target')
  document
    .getElementById('panels') // To target the panels container
    .getElementsByClassName(classString)[0] // To get this for panel-2: <div class="flex flex-col py-5 md:fl…space-x-7 panel panel-2">
    .classList.remove('hidden');
}

