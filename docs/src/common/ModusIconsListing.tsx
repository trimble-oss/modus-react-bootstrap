import React from 'react'
import { useState } from 'react'
import { Form } from '../../../src'

const ModusIcons = [
  { icon: '3d_buildings' },
  { icon: 'add' },
  { icon: 'add_new_road' },
  { icon: 'arrow_left' },
  { icon: 'arrow_left_bold' },
  { icon: 'arrow_right' },
  { icon: 'arrow_right_bold' },
  { icon: 'blank' },
  { icon: 'blocks_four' },
  { icon: 'blocks_four_outline' },
  { icon: 'box_zoom' },
  { icon: 'calendar' },
  { icon: 'car' },
  { icon: 'car_front' },
  { icon: 'change_start_time' },
  { icon: 'chat' },
  { icon: 'check' },
  { icon: 'checkbox_checked' },
  { icon: 'checkbox_unchecked' },
  { icon: 'check_circle' },
  { icon: 'chevron' },
  { icon: 'chevron_down_thick' },
  { icon: 'chevron_left' },
  { icon: 'chevron_left_thick' },
  { icon: 'chevron_right' },
  { icon: 'chevron_right_thick' },
  { icon: 'chevron_up_thick' },
  { icon: 'circle' },
  { icon: 'circle_add' },
  { icon: 'circle_add_outline' },
  { icon: 'circle_arrow_up' },
  { icon: 'circle_check_outline' },
  { icon: 'circle_close' },
  { icon: 'circle_close_outline' },
  { icon: 'circle_dot' },
  { icon: 'circle_dot_outline' },
  { icon: 'circle_minus' },
  { icon: 'circle_notch' },
  { icon: 'circle_outline' },
  { icon: 'circle_play' },
  { icon: 'clipboard' },
  { icon: 'clock' },
  { icon: 'close' },
  { icon: 'cloud' },
  { icon: 'cloud_download' },
  { icon: 'cloud_upload' },
  { icon: 'cluster' },
  { icon: 'company_administration' },
  { icon: 'compare_arrows' },
  { icon: 'configuration_management' },
  { icon: 'crop' },
  { icon: 'crow_fly' },
  { icon: 'dashboard' },
  { icon: 'disk' },
  { icon: 'dispatch' },
  { icon: 'driver' },
  { icon: 'driver_groups' },
  { icon: 'edit' },
  { icon: 'edit_line' },
  { icon: 'edit_road' },
  { icon: 'envelope' },
  { icon: 'expand' },
  { icon: 'expand_less' },
  { icon: 'expand_more' },
  { icon: 'export' },
  { icon: 'external_link' },
  { icon: 'eyedropper' },
  { icon: 'facebook' },
  { icon: 'filter' },
  { icon: 'finalize_route' },
  { icon: 'flag' },
  { icon: 'flash_on' },
  { icon: 'folder' },
  { icon: 'frame' },
  { icon: 'frame_stop' },
  { icon: 'gear' },
  { icon: 'gears' },
  { icon: 'geocode', tags: 'globe' },
  { icon: 'globe' },
  { icon: 'hand' },
  { icon: 'hand_pan' },
  { icon: 'heavy_duty', tags: 'truck' },
  { icon: 'help' },
  { icon: 'highway' },
  { icon: 'info' },
  { icon: 'inspect' },
  { icon: 'invert_route' },
  { icon: 'layout' },
  { icon: 'light_duty', tags: 'truck' },
  { icon: 'link' },
  { icon: 'list_bulleted' },
  { icon: 'load' },
  { icon: 'location' },
  { icon: 'location_arrow' },
  { icon: 'location_point' },
  { icon: 'lock' },
  { icon: 'lock_open' },
  { icon: 'manage_places' },
  { icon: 'manage_route_modifiers' },
  { icon: 'map' },
  { icon: 'map_layers' },
  { icon: 'map_marker' },
  { icon: 'map_markers' },
  { icon: 'maximize' },
  { icon: 'medium_duty', tags: 'truck' },
  { icon: 'menu', tags: 'hamburger' },
  { icon: 'minimize' },
  { icon: 'minus' },
  { icon: 'more_horizontal' },
  { icon: 'more_vertical' },
  { icon: 'my_trip' },
  { icon: 'no_entry' },
  { icon: 'one_way_left', tags: 'arrow' },
  { icon: 'one_way_right', tags: 'arrow' },
  { icon: 'optimize' },
  { icon: 'orders' },
  { icon: 'palette' },
  { icon: 'paper_plane' },
  { icon: 'pin_icon' },
  { icon: 'pin_icon_plus' },
  { icon: 'poi' },
  { icon: 'polygon' },
  { icon: 'polygon_concave' },
  { icon: 'polygon_cone' },
  { icon: 'polygon_select' },
  { icon: 'preview' },
  { icon: 'radar' },
  { icon: 'radio_button_checked' },
  { icon: 'radio_button_unchecked' },
  { icon: 'random' },
  { icon: 'refresh' },
  { icon: 'rename_route' },
  { icon: 'reports' },
  { icon: 'reroute' },
  { icon: 'reschedule_route' },
  { icon: 'road_surface' },
  { icon: 'route' },
  { icon: 'route_add' },
  { icon: 'route_compliance' },
  { icon: 'route_delete' },
  { icon: 'route_load' },
  { icon: 'route_modifiers' },
  { icon: 'route_off' },
  { icon: 'route_on' },
  { icon: 'route_optimize' },
  { icon: 'route_options' },
  { icon: 'route_save' },
  { icon: 'school_bus' },
  { icon: 'search' },
  { icon: 'share' },
  { icon: 'show_closest' },
  { icon: 'show_truck_info' },
  { icon: 'site_manager' },
  { icon: 'sort' },
  { icon: 'sort_alpha_down' },
  { icon: 'sort_alpha_up' },
  { icon: 'sort_amount_down' },
  { icon: 'sort_amount_up' },
  { icon: 'sort_numeric_down' },
  { icon: 'sort_numeric_up' },
  { icon: 'speed_coaching_profiles' },
  { icon: 'spinner' },
  { icon: 'star' },
  { icon: 'star_outline' },
  { icon: 'stop_details' },
  { icon: 'stop_summary' },
  { icon: 'stop_time' },
  { icon: 'suggestion' },
  { icon: 'swatch' },
  { icon: 'text' },
  { icon: 'today' },
  { icon: 'toggle' },
  { icon: 'traffic' },
  { icon: 'train' },
  { icon: 'trash' },
  { icon: 'triangle_left' },
  { icon: 'triangle_right' },
  { icon: 'trim_fake_orders' },
  { icon: 'truck' },
  { icon: 'turn_dispatch_mode_on' },
  { icon: 'twitter' },
  { icon: 'two_way' },
  { icon: 'unloaded_order' },
  { icon: 'unloaded_orders' },
  { icon: 'unload_route_stop' },
  { icon: 'update' },
  { icon: 'upgrade_modifiers' },
  { icon: 'user' },
  { icon: 'user_fields' },
  { icon: 'vehicle_groups' },
  { icon: 'visibility', tags: 'eye' },
  { icon: 'visibility_off', tags: 'eye' },
  { icon: 'volumes' },
  { icon: 'warning' },
  { icon: 'weather_alerts' },
  { icon: 'zoom_in' },
  { icon: 'zoom_out' },
]

const ModusIconItem = ({ icon, tags }) => {
  return (
    <li id={icon} className='col text-center mb-3 notranslate' data-tags={`${icon} ${tags}`}>
      <div className='border border-bottom-0 py-3'>
        <i className='modus-icons notranslate'>{icon}</i>
      </div>
      <div className='code-sample bg-light border border-top-0 highlight py-2 text-monospace'>
        &lt;<span className='nt'>i</span> <span className='na'>class</span>="
        <span className='s'>modus-icons</span>"&gt;{icon}&lt;/
        <span className='nt'>i</span>&gt;
      </div>
    </li>
  )
}

export const ModusIconsListing: React.FC<HTMLFormElement> = () => {
  const [iconList, setIconList] = useState(ModusIcons)
  const handleSearch = (event) => {
    const searchText = event.target.value.toLowerCase()
    setIconList(ModusIcons.filter((item) => item.icon.toLowerCase().includes(searchText)))
  }
  return (
    <Form className='ml-0 mb-2'>
      <Form.Group controlId='iconSearch'>
        <Form.Label className='sr-only'>Search for icons</Form.Label>
        <Form.Control
          className='form-control search'
          placeholder='Start typing to filter...'
          type='search'
          title=''
          required
          onKeyPress={(event) => event.keyCode !== 13}
          onChange={handleSearch}
        />
      </Form.Group>
      <ul className='row row-cols-1 row-cols-md-2 list-unstyled list' id='icons-list'>
        {iconList.map((item) => (
          <ModusIconItem icon={item.icon} key={item.icon} tags={item.tags} />
        ))}
      </ul>
    </Form>
  )
}
